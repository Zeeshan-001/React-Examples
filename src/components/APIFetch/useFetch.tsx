import * as React from "react";

const UseFetch = (url: string, options: RequestInit = {}) => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const loadUserData = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(url, {
          ...options,
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`HTTP Error! status: ${res.status}`);
        }

        const result = await res.json();
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            return;
          }
          setError(err.message);
        } else {
          setError("Ein unbekannter Fehler ist aufgetreten!");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadUserData();

    return () => controller.abort();
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
};

export default UseFetch;
