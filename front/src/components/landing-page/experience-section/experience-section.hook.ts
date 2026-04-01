import { useCallback } from "react";
import axiosInstance from "@/services/api/axiosConfig";
import { useApi } from "@/hooks/api/useApi";
import { Experience } from "@/models/experience.model";
import { useLocale } from "@/contexts/locale-context";

export function useExperiences() {
  const { locale } = useLocale();

  const fetchExperiences = useCallback(async () => {
    const response = await axiosInstance.get<{ docs: Experience[] }>("/experiences");
    return response.data.docs;
  }, [locale]);

  const { data, loading, error } = useApi<Experience[]>(fetchExperiences);

  return {
    experiences: data ?? [],
    loading,
    error,
  };
}
