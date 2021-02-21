export const addItemToCart = (oldItems, newItem) => {
  const existing = oldItems.find((item) => item.id === newItem.id);

  if (existing) {
    return oldItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...oldItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCheckoutPage = (oldItems, newItems) => {
  const existing = oldItems.find((item) => item.id === newItems.id);

  if (existing.quantity === 1) {
    return oldItems.filter((item) => item.id !== newItems.id);
  }

  return oldItems.map((cartItem) =>
    cartItem.id === newItems.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
