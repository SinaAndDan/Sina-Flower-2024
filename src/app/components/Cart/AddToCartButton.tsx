"use client";

import React from "react";
import { useCartDispatch } from "../../../context/CartContext"; // Ensure the path is correct

type AddToCartButtonProps = {
  id: string;
  name: string;
  price: number;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  id,
  name,
  price,
}) => {
  const dispatch = useCartDispatch(); // Ensure this function exists

  const handleClick = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id, name, price, quantity: 1 },
    });
  };

  return <button onClick={handleClick}>Add to Cart</button>;
};

export default AddToCartButton;
