import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useGlobalContext } from "../../context/GlobalContext";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Loading: React.FC = () => {
  const { content, language } = useGlobalContext();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center space-y-4"
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center">
          <Image
            width={200}
            height={200}
            alt="loading"
            src="/images/golesina.png"
            priority
            className="w-auto h-auto"
          />
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`text-xl font-semibold ${language === "pe" ? "font-yekan" : poppins.className
            }`}
        >
          {content.loading}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;
