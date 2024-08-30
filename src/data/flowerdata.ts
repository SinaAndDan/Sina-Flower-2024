// src/data/flowerData.ts
import flower from "../../public/4k flower.jpg";

const flowerData = [
  {
    name: "رز",
    price: "40$",
    image: "/rose.jpg", // Path relative to the public folder
  },
  {
    name: "یه گل ناب ",
    price: "$15",
    image: "/tulip.jpg", // Path relative to the public folder
  },
  {
    name: "رز",
    price: "40$",
    image: "/rose.jpg", // Path relative to the public folder
  },
  {
    name: "رز",
    price: "40$",
    image: "/rose.jpg", // Path relative to the public folder
  },
  {
    name: "رز",
    price: "40$",
    image: "/rose.jpg", // Path relative to the public folder
  },
];

const flowerFavorite = [
  {
    name: "یه گل مشتی",
    price: "40$",
    image: "/rose.jpg", // Path relative to the public folder
  },
  {
    name: "یه گل خیار ",
    price: "$15",
    image: "/tulip.jpg", // Path relative to the public folder
  },
  {
    name: "رز",
    price: "40$",
    image: "/rose.jpg", // Path relative to the public folder
  },
  {
    name: "رز",
    price: "40$",
    image: "/rose.jpg", // Path relative to the public folder
  },
  {
    name: "رز",
    price: "40$",
    image: "/rose.jpg", // Path relative to the public folder
  },
];
const cardData = [
  {
    id: 1,
    title: "گل های صنعتی",
    description: "بهترین گل های ضنعتی",
    image: flower, // Replace with different image paths if needed
    alt: "گل",
  },
  {
    id: 2,
    title: "گل های خانگی",
    description: "بهرتین گل های خانگی",
    image: flower, // Replace with different image paths if needed
    alt: "Another acquisition",
  },
];

export { flowerFavorite, flowerData, cardData };
