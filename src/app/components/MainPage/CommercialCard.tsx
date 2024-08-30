import React from "react";
import Image from "next/image";
import { cardData } from "@/data/flowerdata";

const CommercialCard: React.FC = () => {
  return (
    <div className="flex flex-wrap m-2 justify-center gap-4">
      {cardData.map((card) => (
        <a
          key={card.id}
          href="#"
          className="block w-full  md:w-2/5 lg:w-1/3 p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <div className="relative w-full h-48">
            <Image
              className="object-cover rounded-t-lg"
              src={card.image}
              alt={card.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h5 className="mt-4 mb-2 text-xl font-bold tracking-tight text-gray-900">
            {card.title}
          </h5>
          <p className="font-normal text-gray-700">{card.description}</p>
        </a>
      ))}
    </div>
  );
};

export default CommercialCard;
