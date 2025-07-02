import { useState } from "react";
import type { LastActionTypes } from "../types";

export const useListManager = (initialItems: string[] = []) => {
  const [items, setItems] = useState<string[]>(initialItems);
  const [lastAction, setLastAction] = useState<LastActionTypes>(null);

  const addItem = (value: string) => {
    setItems((prev) => [...prev, value]);
    setLastAction({ type: "add", item: value });
  };

  const deleteItems = (selectedItems: string[]) => {
    const deletedWithIndex = selectedItems.map((item) => ({
      value: item,
      index: items.indexOf(item),
    }));

    setLastAction({ type: "delete", items: deletedWithIndex });

    setItems((prev) =>
      prev.filter((item) => !selectedItems.includes(item))
    );
  };

  const handleUndo = () => {
    if (!lastAction) return;

    let updatedItems = [...items];

    switch (lastAction.type) {
      case "add":
        updatedItems = updatedItems.filter(
          (item) => item !== lastAction.item
        );
        break;

      case "delete": {
        const restored = [...updatedItems];
        lastAction.items
          .sort((a, b) => a.index - b.index)
          .forEach(({ value, index }) => {
            if (!restored.includes(value)) {
              restored.splice(index, 0, value);
            }
          });
        updatedItems = restored;
        break;
      }
    }

    setItems(updatedItems);
    setLastAction(null);
  };

  return {
    items,
    addItem,
    deleteItems,
    handleUndo,
  };
};
