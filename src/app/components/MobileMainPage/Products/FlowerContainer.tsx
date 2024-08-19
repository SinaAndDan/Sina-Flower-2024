// src/components/FlowerContainer.tsx

import React from "react";
import FlowerCard from "./FlowerCard";
import { flowerData, flowerFavorite } from "../../../../data/flowerdata";

const FlowerContainer: React.FC = () => {
  return (
    <>
      <div className="flex justify-between p-8 pb-0">
        <div>جدید</div>
        <div>مشاهده همه </div>
      </div>
      <div className="flex  justify-center p-4 pt-0">
        {flowerData.map((flower, index) => (
          <FlowerCard key={index} flower={flower} />
        ))}
      </div>
      <div className="flex justify-between p-8 pb-0">
        <div>محبوب</div>
        <div>مشاهده همه </div>
      </div>
      <div className="flex  justify-center p-4 pt-0">
        {flowerFavorite.map((flower, index) => (
          <FlowerCard key={index} flower={flower} />
        ))}
      </div>
    </>
  );
};

export default FlowerContainer;
