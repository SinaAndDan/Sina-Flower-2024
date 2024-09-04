import { FC } from "react";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem: FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex justify-between p-4 border-b">
      <div>
        <h4 className="text-lg font-semibold">{item.name}</h4>
        <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
          className="border rounded p-1 w-16"
        />
      </div>
      <div className="flex items-center space-x-4">
        <p className="font-bold">
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button onClick={() => onRemove(item.id)} className="text-red-500">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
