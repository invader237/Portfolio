import { useCallback } from "react";
import axiosInstance from "@/services/api/axiosConfig";
import { useApi } from "@/hooks/api/useApi";
import { Experience } from "@/models/experience.model";

export function useExperiences() {
  const fetchExperiences = useCallback(async () => {
    const response = await axiosInstance.get<{ docs: Experience[] }>("/experiences?locale=en");
    return response.data.docs;
  }, []); 

  const { data, loading, error } = useApi<Experience[]>(fetchExperiences);

  return {
    experiences: data ?? [],
    loading,
    error,
  };
}
