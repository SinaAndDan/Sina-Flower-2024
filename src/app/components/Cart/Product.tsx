import { FC } from "react";
import { useCart } from "../../../context/CartContext";

interface ProductProps {
  id: string;
  name: string;
  price: number;
}

const Product: FC<ProductProps> = ({ id, name, price }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id, name, price, quantity: 1 },
    });
  };

  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-lg">${price.toFixed(2)}</p>
      <button
        onClick={addToCart}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
