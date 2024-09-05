"use client";

import "../../../styles/fonts.css";
import { useState } from "react";
import DetailHero from "./DetailHero";
import AddToCartButton from "./AddToCartButton";
import Reviews from "./Reviews";
import About from "./About";
import Maintaining from "./Maintaining";

const DetailNavbar: React.FC = () => {
  const [about, setAbout] = useState<boolean | null>(false);
  const [liked, setIsLiked] = useState<boolean | null>(false);

  const switchToCmsHandler = () => {
    if (about) {
      setAbout(false);
    }
    return;
  };
  const switchToaboutHandler = () => {
    if (!about) {
      setAbout(true);
    }
    return;
  };

  const giveLikeHandler = () => {
    setIsLiked((liked) => !liked);
  };
  return (
    <div className="font-yekan w-full">
      <DetailHero />
      <div className="container mx-auto sm:px-0 px-2">
        <h6 className="mt-8 px-4 font-semibold sm:text-xl">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        </h6>
        <Maintaining />
        <AddToCartButton />
        <div className="flex justify-center items-center">
          <a
            className={`pl-3 border-l-2 border-zinc-700 border-opacity-40 text-xl cursor-pointer transition ease-in delay-75 ${
              !about && "text-lime-700"
            }`}
            onClick={switchToCmsHandler}
          >
            نظرات
          </a>
          <a
            className={`pr-3 transition ease-in delay-75 ${
              about && "text-lime-700"
            } text-xl cursor-pointer`}
            onClick={switchToaboutHandler}
          >
            معرفی محصول
          </a>
        </div>
        <About about={about} />
        <Reviews about={about} liked={liked} onLikeClick={giveLikeHandler} />
      </div>
    </div>
  );
};

export default DetailNavbar;
