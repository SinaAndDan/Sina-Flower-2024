"use client";

import React, { useRef } from "react";
import FlowerCard from "./FlowerCard";
import { flowerData, flowerFavorite } from "../../../../data/flowerdata";
import { supabase } from "../../../../../lib/supabaseClient";

interface Plant {
  id: string;
  name: string;
  price: number;
  picture: string;
  width: number;
  height: number;
}

const FlowerContainer: React.FC = () => {
  // Refs for swiper instances
  const flowerDataRef = useRef<HTMLDivElement>(null);
  const flowerFavoriteRef = useRef<HTMLDivElement>(null);

  // Scroll functions
  const scroll = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  // Render a flower section with dynamic scroll handlers
  const renderFlowerSection = (
    title: string,
    flowers: typeof flowerData,
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <>
      <div className="flex flex-row justify-between p-8 pb-0">
        <h2>{title}</h2>
        <button className="text-green-600">مشاهده همه</button>
      </div>
      <div className="relative overflow-hidden">
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg z-10"
          onClick={() => scroll(ref, "left")}
          aria-label={`Scroll ${title} left`}
        >
          ❯
        </button>
        <div
          className="swiper-wrapper flex gap-4 overflow-x-auto scrollbar-hide justify-start"
          ref={ref}
        >
          {flowers.map((flower, id) => (
            <div className="flex-shrink-0 w-52 m-2" key={id}>
              <FlowerCard flower={flower} />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg z-10"
          onClick={() => scroll(ref, "right")}
          aria-label={`Scroll ${title} right`}
        >
          ❮
        </button>
      </div>
    </>
  );

  return (
    <>
      {renderFlowerSection("جدید", flowerData, flowerDataRef)}
      <div className="overflow-y-auto max-h-[calc(100vh-4rem)] mb-16">
        {renderFlowerSection("محبوب", flowerFavorite, flowerFavoriteRef)}
      </div>
    </>
  );
};

export default FlowerContainer;
