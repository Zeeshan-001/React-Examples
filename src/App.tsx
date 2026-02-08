import "./App.css";
import Debounced from "./components/Debounced/Debounced";
import Sortierung from "./components/Sortierung/Sortierung";
import { useLocalStorage } from "./cutom-hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("app-theme", "light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      {/* <h1>Aktuelles Theme: {theme}</h1>
      <button onClick={toggleTheme}>Theme wechseln</button> */}

      <Sortierung />
    </div>
  );
}

export default App;
