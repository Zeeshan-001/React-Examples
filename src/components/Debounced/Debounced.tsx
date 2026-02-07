import * as React from "react";
import { countries } from "./../../services/countries";
import useDebounce from "../../cutom-hooks/useDebounce";

const Debounced = () => {
  const [input, setInput] = React.useState<string>("");
  const debouncedInput = useDebounce(input.toLowerCase().trim(), 1000);

  const filteredCountries = React.useMemo(() => {
    if (!debouncedInput) return countries;
    return countries.filter((con) => con.toLowerCase().startsWith(debouncedInput));
  }, [debouncedInput]);

  return (
    <>
      <div className="flex flex-col text-left">
        <label className="label" htmlFor="search">
          Search Country:
        </label>
        <input placeholder="search..." className="input" type="search" name="search" id="search" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
      </div>

      <ul className="bg-secondary text-secondary text-left w-full mt-1 max-h-sm overflowY-scroll">
        {filteredCountries?.map((con: string) => {
          return (
            <li key={con} className="p-2 border-b">
              {con}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Debounced;
