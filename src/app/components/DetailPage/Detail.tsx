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

const DetailNavbar: React.FC<{ productId: string }> = ({ productId }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [about, setAbout] = useState<boolean | null>(true);
  const [liked, setIsLiked] = useState<boolean | null>(false);
  const [disliked, setIsDisLiked] = useState<boolean | null>(false);
  const [isReply, setIsReply] = useState<boolean | null>(false);
  const [selectedProduct, setSelectedProduct] = useState<PlantProps | null>(
    null
  );
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(false);

  const reviewRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const product = plants.find((item) => item.id === productId);

    if (product) {
      setSelectedProduct(product); // Only set if product is found
    } else {
      console.error("Product not found");
      setSelectedProduct(null); // Set to null or handle as needed
    }
  }, [plants, productId]);

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
          <h5 className="text-2xl">{selectedProduct?.name}</h5>
          <button
            className="text-black text-opacity-60"
            onClick={scrollToReviews}
          >
            (۴ نظر)
          </button>
        </div>
        <Maintaining />
        <div className="flex items-center">
          <a
            className="transition ease-in delay-75
           text-xl cursor-pointer"
          >
            معرفی محصول
          </a>
        </div>
        <About about={about} />
        <div className="flex items-center mt-8">
          <a
            className="transition ease-in delay-75
           text-xl cursor-pointer"
          >
            نظرها
          </a>
        </div>
        <Reviews
          reviewRef={reviewRef}
          about={about}
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
