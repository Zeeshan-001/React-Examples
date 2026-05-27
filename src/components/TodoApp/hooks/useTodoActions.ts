import { useMemo, useRef, useState } from "react";
import type { Filter_Type, ItemActions } from "../reducer/todoReducer";
import type { ItemType } from "../modal/items";
import { useLocalStorage } from "../../../cutom-hooks/useLocalStorage_O";

export function useTodoActions(items: ItemType[], todoDispatch: React.Dispatch<ItemActions>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [storedValue, setValue] = useLocalStorage<string[]>("todos", ["Buy groceries for dinner", "Finish CSS layout structure"]);
  console.log(storedValue);
  const filteredItems = useMemo(() => {
    return items.filter((item: ItemType) => {
      if (selectedFilter === "completed") return item.completed;
      if (selectedFilter === "active") return !item.completed;
      return true;
    });
  }, [items, selectedFilter]);

  // Add
  const handleIAddItem = (): void => {
    const input = inputRef.current;
    if (!input) return;
    const val = input.value.trim();
    setValue((prev) => [...prev, val]);
    todoDispatch({ type: "ADD_ITEM", payload: val });
    input.value = "";
  };

  // Delete
  const handleDeleteItem = (itemID: string): void => {
    todoDispatch({ type: "DELETE_ITEM", payload: itemID });
  };

  const handleToggleItem = (itemID: string): void => {
    const checkbox = checkboxRef.current;
    if (!checkbox) return;

    const isCompleted = checkbox.checked;
    todoDispatch({ type: "TOGGLE_ITEM", payload: { isCompleted, itemID } });
  };

  return { handleIAddItem, handleDeleteItem, handleToggleItem, setSelectedFilter, inputRef, checkboxRef, selectedFilter, filteredItems };
}
