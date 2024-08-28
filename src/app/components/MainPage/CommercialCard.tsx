import React from "react";
import Image from "next/image";
import flower from "../../../../public/4k flower.jpg";

const cardData = [
  {
    id: 1,
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    image: flower, // Replace with different image paths if needed
    alt: "Technology acquisitions 2021",
  },
  {
    id: 2,
    title: "Another significant acquisition",
    description:
      "This is another notable acquisition in the technology space that happened recently.",
    image: flower, // Replace with different image paths if needed
    alt: "Another acquisition",
  },
  // Add more cards as needed
];

const CommercialCard: React.FC = () => {
  return (
    <div className="flex flex-wrap m-2 justify-center gap-5">
      {cardData.map((card) => (
        <a
          key={card.id}
          href="#"
          className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
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
          <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {card.title}
          </h5>
          <p className="font-normal text-gray-700">{card.description}</p>
        </a>
      ))}
    </div>
  );
};

export default CommercialCard;
