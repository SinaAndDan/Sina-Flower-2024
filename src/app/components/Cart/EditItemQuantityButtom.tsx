import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import clsx from "clsx";
import { removeItem, updateItemQuantity } from "./Actions";
import LoadingDots from "../LoadingDots";

// Define the types used in this component
type Money = {
  amount: number;
  currency: string;
};

type Product = {
  id: string;
  title: string;
  // Add other properties as needed
};

type CartItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: Product;
  };
};

// Define the component props
interface EditItemQuantityButtonProps {
  item: CartItem;
  type: "plus" | "minus";
}

export default function EditItemQuantityButton({
  item,
  type,
}: EditItemQuantityButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label={
        type === "plus" ? "Increase item quantity" : "Reduce item quantity"
      }
      onClick={() => {
        startTransition(async () => {
          const newQuantity =
            type === "plus" ? item.quantity + 1 : item.quantity - 1;

          // Decide whether to remove the item or update its quantity
          const error =
            newQuantity === 0
              ? await removeItem(item.id)
              : await updateItemQuantity({
                  lineId: item.id,
                  variantId: item.merchandise.id,
                  quantity: newQuantity,
                });

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className={clsx(
        "ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",
        {
          "cursor-not-allowed": isPending,
          "ml-auto": type === "minus",
        }
      )}
    >
      {isPending ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : type === "plus" ? (
        <CiCirclePlus className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <CiCircleMinus className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}
