import { FC } from "react";
import { useCart } from "../../../context/CartContext"; // Ensure the path is correct
import CartItem from "./CartItem";

const Cart: FC = () => {
  const { state, dispatch } = useCart();

  const handleRemove = (id: string) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id, name: "", price: 0, quantity: 0 },
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { id, name: "", price: 0, quantity },
    });
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        state.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemove}
            onUpdateQuantity={handleUpdateQuantity}
          />
        ))
      )}
      <div className="mt-4 font-bold">
        Total: $
        {state.items
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
