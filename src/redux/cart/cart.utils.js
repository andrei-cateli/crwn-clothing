export const addItemToCart = (oldItems, newItem) => {
  const existing = oldItems.find((item) => item.id === newItem.id);

  if (existing) {
    return oldItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...oldItems, { ...newItem, quantity: 1 }];
};
