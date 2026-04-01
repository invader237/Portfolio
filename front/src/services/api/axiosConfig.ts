import axios from "axios";

export type SupportedLocale = "fr" | "en";

let currentApiLocale: SupportedLocale = "en";

export function setApiLocale(locale: SupportedLocale) {
  currentApiLocale = locale;
}

export function getApiLocale() {
  return currentApiLocale;
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use((config) => {
  const hasLocaleInUrl =
    typeof config.url === "string" && /(?:\?|&)locale=/.test(config.url);

  if (hasLocaleInUrl) {
    return config;
  }

  if (config.params instanceof URLSearchParams) {
    if (!config.params.has("locale")) {
      config.params.set("locale", getApiLocale());
    }

    return config;
  }

  const currentParams = (config.params ?? {}) as Record<string, unknown>;

  if (!Object.prototype.hasOwnProperty.call(currentParams, "locale")) {
    config.params = {
      ...currentParams,
      locale: getApiLocale(),
    };
  }

  return config;
});

export default axiosInstance;
