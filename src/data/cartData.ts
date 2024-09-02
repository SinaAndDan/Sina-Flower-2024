// Define types
type Money = {
  amount: number;
  currency: string;
};

type Product = {
  id: string;
  title: string;
};

type CartItem = {
  lineId: string;
  variantId: string;
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

export type Cart = {
  id: string;
  items: CartItem[];
};

// Initial mock cart data
const mockCart: Cart = {
  id: "mock-cart-id",
  items: [
    {
      lineId: "line-1",
      variantId: "variant-1",
      quantity: 2,
      cost: { totalAmount: { amount: 29.99, currency: "USD" } },
      merchandise: {
        id: "product-1",
        title: "Sample Product",
        selectedOptions: [{ name: "Size", value: "M" }],
        product: {
          id: "product-1",
          title: "Sample Product",
        },
      },
    },
  ],
};

// Store carts in a map
const dummyData = {
  carts: new Map<string, Cart>([[mockCart.id, mockCart]]),
};

// Helper function to get or create a new cart
export const getOrCreateCart = (cartId: string | undefined): Cart => {
  if (!cartId || !dummyData.carts.has(cartId)) {
    const newCart = { ...mockCart, id: cartId || `new-cart-${Date.now()}` };
    dummyData.carts.set(newCart.id, newCart);
    return newCart;
  }
  return dummyData.carts.get(cartId) as Cart;
};

// Function to get a cart by ID
export async function getCart(cartId: string): Promise<Cart | null> {
  await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate async operation
  return dummyData.carts.get(cartId) || null;
}

// Function to add an item to the cart
export const addItemToCart = async (
  variantId: string | undefined
): Promise<string | undefined> => {
  // Simulate getting cartId from somewhere else (e.g., localStorage or API)
  const cartId = "mock-cart-id"; // Replace with actual cart ID retrieval logic
  const cart = getOrCreateCart(cartId);

  if (!variantId) {
    return "Missing product variant ID";
  }

  try {
    cart.items.push({
      lineId: `line-${Date.now()}`, // Unique line ID
      variantId,
      quantity: 1,
      cost: {
        totalAmount: { amount: 0, currency: "USD" }, // Provide a default cost if needed
      },
      merchandise: {
        id: variantId,
        title: "Unknown Product", // Provide a default title if needed
        selectedOptions: [],
        product: {
          id: variantId,
          title: "Unknown Product", // Provide a default title if needed
        },
      },
    });
    dummyData.carts.set(cart.id, cart);
    return;
  } catch (e) {
    console.error("Error adding item to cart:", e);
    return "Error adding item to cart";
  }
};

// Function to remove an item from the cart
export const removeItemFromCart = async (
  lineId: string
): Promise<string | undefined> => {
  // Simulate getting cartId from somewhere else (e.g., localStorage or API)
  const cartId = "mock-cart-id"; // Replace with actual cart ID retrieval logic
  const cart = getOrCreateCart(cartId);

  if (!cartId) {
    return "Missing cart ID";
  }

  try {
    cart.items = cart.items.filter((item) => item.lineId !== lineId);
    dummyData.carts.set(cart.id, cart);
    return;
  } catch (e) {
    console.error("Error removing item from cart:", e);
    return "Error removing item from cart";
  }
};

// Function to update the quantity of an item in the cart
export const updateItemQuantityInCart = async ({
  lineId,
  variantId,
  quantity,
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}): Promise<string | undefined> => {
  // Simulate getting cartId from somewhere else (e.g., localStorage or API)
  const cartId = "mock-cart-id"; // Replace with actual cart ID retrieval logic
  const cart = getOrCreateCart(cartId);

  if (!cartId) {
    return "Missing cart ID";
  }

  try {
    const item = cart.items.find((item) => item.lineId === lineId);

    if (item) {
      item.quantity = quantity;
      item.variantId = variantId; // Ensure the variantId is updated if needed
    } else {
      return "Item not found in cart";
    }

    dummyData.carts.set(cart.id, cart);
    return;
  } catch (e) {
    console.error("Error updating item quantity:", e);
    return "Error updating item quantity";
  }
};
