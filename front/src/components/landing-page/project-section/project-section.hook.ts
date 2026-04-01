
import { useCallback } from "react";
import axiosInstance from "@/services/api/axiosConfig";
import { useApi } from "@/hooks/api/useApi";
import { Project } from "@/models/project.model";
import { useLocale } from "@/contexts/locale-context";

export function useProjects() {
  const { locale } = useLocale();

  const fetchProjects = useCallback(async () => {
    const response = await axiosInstance.get<{ docs: Project[] }>("/projects");
    return response.data.docs;
  }, [locale]);

  const { data, loading, error } = useApi<Project[]>(fetchProjects);

  return {
    projects: data ?? [],
    loading,
    error,
  };
}
