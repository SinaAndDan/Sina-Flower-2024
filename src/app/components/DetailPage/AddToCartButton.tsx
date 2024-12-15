import { motion } from "motion/react";
import React from "react";
import { useLanguage } from "src/app/context/LanguageContext";

const AddToCartButton: React.FC = () => {
  const { content } = useLanguage();
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full z-20 px-4 container sm:w-[30%] sm:translate-x-0 sm:static mr-auto">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        className="text-white bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow font-medium rounded-2xl text-sm py-4 text-center w-full"
      >
        {content.addToCart}
      </motion.button>
    </div>
  );
};

export default AddToCartButton;
