import { useCallback, useState } from "react";
// kjfkjsfgkjsdfkgjskdjg kjsdfgksdkfgjk
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValues, setStoredValues] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.warn(`Error by Getting value von LocalStorage ${key}`, err);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((value: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValues) : value;
        setStoredValues(valueToStore);

        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(storedValues));
        }
      } catch (err) {
        console.warn(`Error by Setting LocalStorage Value ${key}`, err);
      }
    },
    [key, storedValues],
  );

  return [storedValues, setValue] as const;
}

// Second Commit
// Third Commit
