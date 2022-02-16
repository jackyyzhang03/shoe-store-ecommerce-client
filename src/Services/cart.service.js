// Checks if two items are considered equal.
const equateCartItems = (item1, item2) => {
  return (
    item1.productId === item2.productId &&
    item1.colour === item2.colour &&
    item1.width === item2.width &&
    item1.size === item2.size
  );
};

// Adds an item to the cart
const updateCartItem = (item, index, cart) => {
  // Replace old item with updated one.
  cart.splice(index, 1);
  if (item.quantity > 0) {
    addCartItem(item, cart);
  }
};

const addCartItem = (item, cart, index = 0) => {
  const cartItem = cart.find((cartItem) => equateCartItems(item, cartItem));
  if (cartItem === undefined) {
    cart.splice(index, 0, item);
  } else {
    // If item already exists, simply update the quantity
    cartItem.quantity += item.quantity;
  }
};

export { equateCartItems, updateCartItem, addCartItem };
