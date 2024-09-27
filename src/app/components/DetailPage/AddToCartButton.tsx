import React from "react";

const AddToCartButton: React.FC = () => {
  return (
    <div className="px-4 fixed bottom-4 w-full container mx-auto z-20">
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm py-4 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full"
      >
        اضافه به سبد
      </button>
    </div>
  );
};

export default AddToCartButton;
