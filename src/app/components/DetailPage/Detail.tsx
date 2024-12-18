"use client";

import "../../../styles/fonts.css";
import { useEffect, useRef, useState } from "react";
import DetailHero from "./DetailHero";
import AddToCartButton from "./AddToCartButton";
import Reviews from "./Reviews";
import About from "./About";
import Maintaining from "./Maintaining";
import { supabase } from "../../../../lib/supabaseClient";
import Loading from "../Layout/Loading";
import { PlantProps } from "src/types/plant";
import { useLanguage } from "../../context/LanguageContext";
import { DetailPageProps } from "src/types/detail";
import { Exo_2, Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
});

const DetailNavbar: React.FC<DetailPageProps> = ({
  productId,
  englishSummary,
  persianSummary,
}) => {
  const [liked, setIsLiked] = useState<boolean | null>(false);
  const [disliked, setIsDisLiked] = useState<boolean | null>(false);
  const [isReply, setIsReply] = useState<boolean | null>(false);
  const [selectedProduct, setSelectedProduct] = useState<PlantProps | null>(
    null
  );
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(false);

  const reviewRef = useRef<HTMLDivElement>(null);
  const { content, language } = useLanguage();

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("plants").select("*");

      if (error) {
        console.error("Error fetching plants:", error);
      } else {
        setPlants(data as PlantProps[]);
      }
      setLoading(false);
    };
    fetchPlants();
  }, []);

  const title =
    language === "pe" ? selectedProduct?.name_pe : selectedProduct?.name_en;

  const fontClass = language === "pe" ? "font-yekan" : roboto.className;

  const fontClassII = language === "pe" ? "font-yekan" : exo.className;

  useEffect(() => {
    const product = plants.find((item) => item.id === productId);

    if (product) {
      setSelectedProduct(product);
    } else {
      setSelectedProduct(null);
    }
  }, [plants, productId]);

  const giveLikeHandler = () => {
    setIsLiked((liked) => !liked);
  };
  const giveDisLikeHandler = () => {
    setIsDisLiked((disliked) => !disliked);
  };

  const replyHandler = () => {
    setIsReply(!isReply);
  };

  const scrollToReviews = () => {
    reviewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="font-yekan w-full">
      <DetailHero selectedProduct={selectedProduct} />
      <section className="container mx-auto sm:px-0 px-4 mt-5">
        <div className="flex items-center justify-between">
          <h5 className={`text-2xl sm:text-4xl capitalize ${fontClass}`}>
            {title}
          </h5>
          <button
            className={`text-black text-opacity-60 sm:text-lg ${fontClassII}`}
            onClick={scrollToReviews}
          >
            ({content.reviews})
          </button>
        </div>
        <Maintaining selectedProduct={selectedProduct} />
        <div className="flex items-center">
          <a
            className={`transition ease-in delay-75
           text-xl sm:text-2xl cursor-pointer ${fontClass}`}
          >
            {content.aboutProduct}
          </a>
        </div>
        <About englishSum={englishSummary} persianSum={persianSummary} />
        <div className="flex items-center mt-8">
          <a
            className={`transition ease-in delay-75
           text-xl cursor-pointer sm:text-2xl ${fontClass}`}
          >
            {content.reviews}
          </a>
        </div>
        <Reviews
          reviewRef={reviewRef}
          liked={liked}
          disliked={disliked}
          onLikeClick={giveLikeHandler}
          onDisLikeClick={giveDisLikeHandler}
          onReply={replyHandler}
          isReply={isReply}
        />
        <AddToCartButton />
      </section>
    </div>
  );
};

export default DetailNavbar;
