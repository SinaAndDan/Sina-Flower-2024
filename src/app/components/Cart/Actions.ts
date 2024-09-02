import { cookies } from "next/headers";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantityInCart,
} from "../../../data/cartData"; // Adjust the path as needed

export const addItem = async (
  variantId: string | undefined
): Promise<string | undefined> => {
  return await addItemToCart(variantId);
};

export const removeItem = async (
  lineId: string
): Promise<string | undefined> => {
  return await removeItemFromCart(lineId);
};

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity,
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}): Promise<string | undefined> => {
  return await updateItemQuantityInCart({ lineId, variantId, quantity });
};
