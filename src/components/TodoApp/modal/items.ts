export type ItemType = { id: string & { readonly brand: unique symbol }; text: string; completed: boolean };
export const ITEMS: ItemType[] = [
  { id: crypto.randomUUID() as ItemType["id"], text: "Buy groceries for dinner", completed: false },
  { id: crypto.randomUUID() as ItemType["id"], text: "Finish CSS layout structure", completed: false },
] as const;

// Commit - 01