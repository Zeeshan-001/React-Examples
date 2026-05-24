import type { ItemType } from "./modal/items";

type ItemActions = { type: "ADD_ITEM"; payload: string } | { type: "DELETE_ITEM"; payload: string };
export function useToDoReducer(state: ItemType[], action: ItemActions): ItemType[] {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: crypto.randomUUID() as ItemType["id"], text: action.payload.trim(), completed: false }];
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
