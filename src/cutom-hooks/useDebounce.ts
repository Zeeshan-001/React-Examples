import { useEffect, useState } from "react";

const useDebounce = (input: string, delay: number) => {
  const [query, setQuery] = useState<string>(typeof input === "string" ? input.toLowerCase().trim() : input);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(input);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [input, delay]);

  return query;
};

// commit 1
export default useDebounce;
