"use client";
import React from "react";
import { useCart, useCartDispatch } from "../../../context/CartContext";

const Cart: React.FC = () => {
  const { items } = useCart();
  const dispatch = useCartDispatch();

  const handleRemove = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
