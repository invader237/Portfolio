import { useEffect, useState } from "react";

export function useApi<T>(request: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const result = await request();
        if (mounted) setData(result);
      } catch (err) {
        if (mounted) setError((err as Error).message);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchData();

    return () => { mounted = false; };
  }, [request]); 

  return { data, loading, error };
}
