import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { equateCartItems } from "../../Services/cart.service";
import { SubmitButton } from "../SingleProductView/Buttons";

const Cart = () => {
  const [items, setItems] = useState([]);

  // TODO: Move cart to server side using sessions.
  // Load cart from local storage.
  useEffect(() => {
    const persistedCart = JSON.parse(localStorage.getItem("cart"));
    if (persistedCart) {
      setItems(persistedCart);
    }
  }, []);

  // Update local storage when cart state changes.
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Deletes the item from the cart.
  const removeItemFromCart = (item) => {
    let newItems = items.slice();
    const i = items.findIndex((cartItem) => equateCartItems(item, cartItem));
    if (i === -1) return;
    newItems.splice(i, 1);
    setItems(newItems);
  };

  // Attempts to get a Stripe Checkout session and redirect automatically.
  // TODO: Error handling.
  // TODO: Show spinner while loading.
  // TODO: Extract to services.
  // TODO: Extract  url.
  const checkout = async (orders) => {
    const response = await fetch("http://localhost:4242/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orders: orders }),
    });
    response.json().then(({ url }) => (window.location = url));
  };

  // Maps shopping cart items to order items for checkout.
  const getOrders = () => {
    const orders = items.map((item) => {
      return { productId: item.productId, quantity: item.quantity };
    });
    console.log(orders);
    return orders;
  };

  const getItemCountString = () => {
    const itemCount = items.reduce((prev, curr) => prev + curr.quantity, 0);
    return itemCount === 1 ? itemCount + " item" : itemCount + " items";
  };

  return (
    <CartContainer>
      <p>
        <span>My Bag</span> {getItemCountString()}
      </p>
      {items.map((item, i) => (
        <CartItem
          key={i}
          index={i}
          item={item}
          handleRemove={() => removeItemFromCart(item)}
        />
      ))}
      {items.length === 0 ? (
        <p>There are no items in currently your bag.</p>
      ) : (
        <div className="subtotal">
          <h3>
            Subtotal: $
            {items
              .reduce(
                (prev, curr) =>
                  prev + (curr.priceInCents * curr.quantity) / 100,
                0
              )
              .toFixed(2)}
          </h3>
          <CheckoutButton onClick={() => checkout(getOrders())}>
            Checkout
          </CheckoutButton>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;

// TODO: Extract component.
const CheckoutButton = styled(SubmitButton)`
  max-width: 9rem;
  margin-left: auto;
`;

const CartContainer = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  span {
    font-size: 1.8rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .subtotal {
    margin-left: auto;
    width: fit-content;
  }

  p {
    margin-bottom: 0;
  }
`;
