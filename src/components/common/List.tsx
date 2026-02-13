import React from "react";

interface Identifiable {
  id: string | number;
}

type ListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  emptyComponent?: React.ReactNode;
};

const List = <T extends Identifiable>({ items, renderItem, keyExtractor, emptyComponent }: ListProps<T>) => {
  // Items Empty
  if (items.length === 0) {
    return <>{emptyComponent ?? <p>Keine Daten vorhanden.</p>}</>;
  }

  return items.map((item, index) => {
    const rendered = renderItem(item, index);
    return <React.Fragment key={keyExtractor?.(item, index) ?? item.id}>{rendered}</React.Fragment>;
  });
};

export default List;
