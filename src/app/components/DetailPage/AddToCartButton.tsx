import { motion } from "motion/react";
import React from "react";

const AddToCartButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full z-20 px-4 container sm:w-[30%] sm:translate-x-0 sm:static mr-auto">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        className="text-white bg-gradient-to-tl from-[#001a00] to-[#005a36] font-medium rounded-2xl text-sm py-4 text-center w-full"
      >
        اضافه به سبد
      </motion.button>
    </div>
  );
};

export default AddToCartButton;
