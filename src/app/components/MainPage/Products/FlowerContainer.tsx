import React from "react";
import FlowerCard from "./FlowerCard";
import { flowerData, flowerFavorite } from "../../../../data/flowerdata";

const FlowerContainer: React.FC = () => {
  // A reusable component to render each section with a title and flower cards
  const renderFlowerSection = (title: string, flowers: typeof flowerData) => (
    <>
      <div className="flex flex-row justify-between p-8 pb-0">
        <div>{title}</div>
        <div>مشاهده همه</div>
      </div>
      <div className="p-4 pt-0 flex flex-row justify-center space-x-4 overflow-x-auto">
        {flowers.map((flower, index) => (
          <FlowerCard key={index} flower={flower} />
        ))}
      </div>
    </>
  );

  return (
    <>
      {renderFlowerSection("جدید", flowerData)}
      <div className="overflow-y-auto max-h-[calc(100vh-4rem)] mb-16">
        {renderFlowerSection("محبوب", flowerFavorite)}
      </div>
    </>
  );
};

export default FlowerContainer;
