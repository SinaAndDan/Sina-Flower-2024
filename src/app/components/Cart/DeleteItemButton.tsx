"use client";

import { FaBuildingCircleXmark } from "react-icons/fa6";
import LoadingDots from "../LoadingDots";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { removeItem } from "./Actions";
import { useTransition } from "react";

// Define the Money type if not already defined
export type Money = {
  amount: number;
  currency: string;
};

// Define the CartItem type locally
export type CartItem = {
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
    product: Product; // Ensure `Product` is defined or imported
  };
};

// Define the Cart type locally
export type Cart = Omit<VercelCommerceCart, "lines"> & {
  lines: CartItem[];
};

// Define or import the `Product` and `VercelCommerceCart` types if not already defined
// For example:
export type Product = {
  id: string;
  title: string;
  // Add other properties as needed
};

export type VercelCommerceCart = {
  id: string;
  // Add other properties as needed
};

export default function DeleteItemButton({ item }: { item: CartItem }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label="Remove cart item"
      onClick={() => {
        startTransition(async () => {
          const error = await removeItem(item.id);

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className={clsx(
        "ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200",
        {
          "cursor-not-allowed px-0": isPending,
        }
      )}
    >
      {isPending ? (
        <LoadingDots className="bg-white" />
      ) : (
        <FaBuildingCircleXmark className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black" />
      )}
    </button>
  );
}
