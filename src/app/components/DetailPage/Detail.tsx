"use client";

import "../../../styles/fonts.css";
import { useEffect, useRef, useState } from "react";
import DetailHero from "./DetailHero";
import AddToCartButton from "./AddToCartButton";
import Reviews from "./Reviews";
import About from "./About";
import Maintaining from "./Maintaining";
import { supabase } from "../../../../lib/supabaseClient";
import { MdOutlineSend } from "react-icons/md";

interface Plant {
  id: string;
  name: string;
  price: number;
  picture: string;
  category: string;
  type: string;
  plant: string;
}

const DetailNavbar: React.FC<{ productId: string }> = ({ productId }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>("");
  const [about, setAbout] = useState<boolean | null>(true);
  const [liked, setIsLiked] = useState<boolean | null>(false);
  const [disliked, setIsDisLiked] = useState<boolean | null>(false);
  const [isReply, setIsReply] = useState<boolean | null>(false);
  const [selectedProduct, setSelectedProduct] = useState<Plant | null>(null);
  const [plants, setPlants] = useState<Plant[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPlants = async () => {
      const { data, error } = await supabase.from("plants").select("*");

      if (error) {
        console.error("Error fetching plants:", error);
      } else {
        setPlants(data as Plant[]);
      }
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

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const replyHandler = () => {
    setIsReply(!isReply);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
    }
  }, [value]);

  return (
    <div className="font-yekan w-full">
      <DetailHero selectedProduct={selectedProduct} />
      <section className="container mx-auto sm:px-0 px-4 mt-5">
        <div className="flex items-center justify-between">
          <h5 className="text-2xl">{selectedProduct?.name}</h5>
          <p className="text-black text-opacity-60">(۴ نظر)</p>
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
          about={about}
          liked={liked}
          disliked={disliked}
          onLikeClick={giveLikeHandler}
          onDisLikeClick={giveDisLikeHandler}
          onReply={replyHandler}
          isReply={isReply}
        />
        {isReply && (
          <div className="flex items-center w-full mb-60 mt-8">
            <textarea
              ref={textareaRef}
              value={value}
              rows={1}
              id="autoGrowInput"
              onChange={handleInput}
              placeholder="نظر شما"
              className="w-full min-h-[2rem] text-sm outline-none bg-gray px-3 py-[0.2rem] text-right resize-none leading-[1.6rem] word-break-keep whitespace-normal direction-rtl"
            />
            <div
              className="bg-gradient-to-tl from-[#002200] to-[#007a4f]
 rounded-full min-w-10 min-h-10 flex items-center justify-center mr-2"
            >
              <MdOutlineSend className="rotate-180 text-white w-6 h-6  cursor-pointer -translate-x-0.5" />
            </div>
          </div>
        )}
        <AddToCartButton />
      </section>
    </div>
  );
};

export default DetailNavbar;
