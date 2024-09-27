// src/data/flowerData.ts
import flower from "../../public/4k flower.jpg";

const flowerData = [
  {
    id: 1,
    name: "شفلرا",
    price: "120,000 تومان",
    image: "/schefflera.jpg", // Path relative to the public folder
  },
  {
    id: 2,
    name: "داوودی",
    price: "180,000 تومان",
    image: "/Chrysanthemum.jpg", // Path relative to the public folder
  },
  {
    id: 3,
    name: "عروس",
    price: "200,000 تومان",
    image: "/whiteFlower.jpg", // Path relative to the public folder
  },
  {
    id: 4,
    name: "لیسیانتوس",
    price: "250,000 تومان",
    image: "/Prairie-gentian.jpg", // Path relative to the public folder
  },
  {
    id: 5,
    name: "شمشاد طلایی",
    price: "300,000 تومان",
    image: "/Variegated-euonymus.png", // Path relative to the public folder
  },
  {
    id: 6,
    name: "توت فرنگی",
    price: "350,000 تومان",
    image: "/strawberry-plant.jpg", // Path relative to the public folder
  },
];

const flowerFavorite = [
  {
    id: 1,
    name: "یه گل مشتی",
    price: "130,000 تومان",
    image: "/Variegated-euonymus.png", // Path relative to the public folder
  },
  {
    id: 2,
    name: "یه گل خیار",
    price: "190,000 تومان",
    image: "/PurpuleFlower.jpg", // Path relative to the public folder
  },
  {
    id: 3,
    name: "رز",
    price: "210,000 تومان",
    image: "/pinkFlower.jpg", // Path relative to the public folder
  },
  {
    id: 4,
    name: "رز",
    price: "270,000 تومان",
    image: "/ficus.png", // Path relative to the public folder
  },
  {
    id: 5,
    name: "رز",
    price: "320,000 تومان",
    image: "/green flowe.png", // Path relative to the public folder
  },
];

const cardData = [
  {
    id: 1,
    title: "گل های صنعتی",
    description: "بهترین گل های ضنعتی",
    image: "/background.png", // Replace with different image paths if needed
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
