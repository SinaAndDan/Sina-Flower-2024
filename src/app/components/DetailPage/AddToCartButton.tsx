import React from "react";

const AddToCartButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full z-20 px-4 container">
      <button
        type="button"
        className="text-white bg-gradient-to-tl from-[#001a00] to-[#005a36]

 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm py-4 text-center w-full"
      >
        اضافه به سبد
      </button>
    </div>
  );
};

export default AddToCartButton;
