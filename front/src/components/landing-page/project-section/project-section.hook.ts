
import { useCallback } from "react";
import axiosInstance from "@/services/api/axiosConfig";
import { useApi } from "@/hooks/api/useApi";
import { Project } from "@/models/project.model";

export function useProjects() {
  const fetchProjects = useCallback(async () => {
    const response = await axiosInstance.get<{ docs: Project[] }>("/projects?locale=en");
    return response.data.docs;
  }, []); 

  const { data, loading, error } = useApi<Project[]>(fetchProjects);

    console.log("Projects data:", data);

  return {
    projects: data ?? [],
    loading,
    error,
  };
}
