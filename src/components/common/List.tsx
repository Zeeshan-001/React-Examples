import React from "react";

interface Identifiable {
  id: number | string;
}

type ListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  emptyComponent: React.ReactNode;
};

export function List<T extends Identifiable>({ items, renderItem, keyExtractor, emptyComponent }: ListProps<T>) {
  if (items.length === 0) {
    return emptyComponent ?? <p>Items are Empty</p>;
  }

  return items.map((item, index) => {
    return <React.Fragment key={keyExtractor?.(item, index) ?? item.id}>{renderItem(item, index)}</React.Fragment>;
  });
}
