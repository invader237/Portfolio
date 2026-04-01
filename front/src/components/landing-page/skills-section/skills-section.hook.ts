import { useCallback } from "react";
import axiosInstance from "@/services/api/axiosConfig";
import { useApi } from "@/hooks/api/useApi";
import { useLocale } from "@/contexts/locale-context";

type SkillItem = {
  id: string | number;
  name: string;
};

export function useSkillsAndTechnologies() {
  const {
    skills,
    loading: loadingSkills,
    error: errorSkills,
  } = useSkills();

  const {
    technologies,
    loading: loadingTech,
    error: errorTech,
  } = useTechnologies();

  const combined: SkillItem[] = [...skills, ...technologies];

  return {
    technologies: combined, 
    loading: loadingSkills || loadingTech,
    error: errorSkills || errorTech,
  };
}

export function useSkills() {
  const { locale } = useLocale();

  const fetchSkills = useCallback(async () => {
    const response = await axiosInstance.get<{ docs: SkillItem[] }>("/skills");
    return response.data.docs;
  }, [locale]);

  const { data, loading, error } = useApi<SkillItem[]>(fetchSkills);

  return {
    skills: data ?? [],
    loading,
    error,
  };
}

export function useTechnologies() {
  const { locale } = useLocale();

  const fetchTechnologies = useCallback(async () => {
    const response = await axiosInstance.get<{ docs: SkillItem[] }>(
      "/technologies",
      {
        params: {
          limit: 100,
        },
      }
    );
    return response.data.docs;
  }, [locale]);

  const { data, loading, error } = useApi<SkillItem[]>(fetchTechnologies);

  return {
    technologies: data ?? [],
    loading,
    error,
  };
}
