// src/components/FlowerContainer.tsx

import React from "react";
import FlowerCard from "./FlowerCard";
import flowerData from "../../../../data/flowerdata";

const FlowerContainer: React.FC = () => {
  return (
    <div className="flex  justify-center p-4">
      {flowerData.map((flower, index) => (
        <FlowerCard key={index} flower={flower} />
      ))}
    </div>
  );
};

export default FlowerContainer;
