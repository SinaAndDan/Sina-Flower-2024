"use client";

import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import FlowerCard from "./FlowerCard";
import { supabase } from "../../../../lib/supabaseClient";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { motion } from "motion/react";
import Loading from "../Layout/Loading";
import { PlantListProp } from "src/types/productcard";
import { CategoryDisplayProp } from "src/types/category";
import { useGlobalContext } from "../../context/GlobalContext";
import { Exo_2, Roboto_Slab } from "next/font/google";
import Image from "next/image";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
});

const MainBodyPc: React.FC<CategoryDisplayProp> = ({ selectedCategory }) => {
  const [plants, setPlants] = useState<PlantListProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchButton, setSearchButton] = useState(false);
  const { content, language, setLanguage } = useGlobalContext();
  const [selectLang, setSelectLang] = useState(false);

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("plants").select("*");

      if (error) {
        console.error("Error fetching plants:", error);
      } else {
        setPlants(data as PlantListProp[]);
      }
      setLoading(false);
    };
    fetchPlants();
  }, []);

  const searchButtonHandler = () => {
    setSearchButton((prevSearchButton) => !prevSearchButton);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="bg-gray md:block flex-1 hidden">
        <div className="flex justify-end pt-12 px-6 md:hidden">
          <IoSearch className="sm:w-8 sm:h-8 w-6 h-6 text-black text-opacity-80" />
        </div>
        <h2
          className={`text-4xl px-6 mt-12 font-extrabold capitalize ${language === "pe" ? "font-yekan" : roboto.className
            }`}
        >
          {content.suggestion}
        </h2>

        <div className="rounded-2xl m-5 w-[90vw] h-auto mx-auto">
          <Swiper
            dir="rtl"
            slidesPerView={3}
            centeredSlides={false}
            slidesOffsetAfter={50}
            loop={true}
            spaceBetween={10}
            breakpoints={{
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1536: { slidesPerView: 6 },
            }}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {plants.map((flower, id) => (
              <SwiperSlide
                className="rounded-2xl m-5 w-full min-h-[300px] pb-5 swiper-slide"
                key={id}
              >
                <FlowerCard flower={flower} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2
          className={`text-4xl px-6 mt-12 font-extrabold capitalize ${language === "pe" ? "font-yekan" : roboto.className
            }`}
        >
          {content.ficus}
        </h2>

        <div className="rounded-2xl m-5 w-[90vw] h-auto mx-auto">
          <Swiper
            dir="rtl"
            slidesPerView={3}
            centeredSlides={false}
            slidesOffsetAfter={50}
            loop={true}
            spaceBetween={10}
            breakpoints={{
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1536: { slidesPerView: 6 },
            }}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {plants.map((flower, id) => (
              <SwiperSlide
                className="rounded-2xl m-5 w-full min-h-[300px] pb-5 swiper-slide"
                key={id}
              >
                <FlowerCard flower={flower} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2
          className={`text-4xl px-6 mt-12 font-extrabold capitalize ${language === "pe" ? "font-yekan" : roboto.className
            }`}
        >
          {content.cactus}
        </h2>

        <div className="rounded-2xl m-5 w-[90vw] h-auto mx-auto">
          <Swiper
            dir="rtl"
            slidesPerView={3}
            centeredSlides={false}
            slidesOffsetAfter={50}
            loop={true}
            spaceBetween={10}
            breakpoints={{
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1536: { slidesPerView: 6 },
            }}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {plants.map((flower, id) => (
              <SwiperSlide
                className="rounded-2xl m-5 w-full min-h-[300px] pb-5 swiper-slide"
                key={id}
              >
                <FlowerCard flower={flower} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div
        className={`bg-gray flex-1 md:hidden ${language === "pe" ? "mr-20" : "ml-20"
          }`}
      >
        <div className="flex justify-between sm:px-6 mt-12">
          <div className="relative">
            <button
              className="flex justify-center items-center px-4 py-2 rounded-lg"
              onClick={() => setSelectLang(!selectLang)}
            >
              <Image
                src={
                  language === "pe"
                    ? "./Icons/Iran-flag.svg"
                    : "./Icons/UK-flag.svg"
                }
                alt="flag"
                className={`w-5 h-5 ${language === "pe" ? "ml-2" : "mr-2"}`}
                width={100}
                height={100}
              />
              {language === "pe" ? "فارسی" : "English"}
            </button>
            <motion.ul
              initial={{ opacity: 0, scaleY: 0 }}
              animate={
                selectLang
                  ? { opacity: 1, scaleY: 1 }
                  : { opacity: 0, scaleY: 0 }
              }
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.3 }}
              className={`${selectLang ? "absolute" : "hidden"
                } mt-2 bg-white rounded-lg`}
            >
              <li
                onClick={() => {
                  setLanguage("pe");
                  setSelectLang(!selectLang);
                }}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 text-xs font-yekan"
              >
                <Image
                  src="./Icons/Iran-flag.svg"
                  alt="Iran flag"
                  className={`w-5 h-5 ${language === "pe" ? "ml-1" : "mr-1"}`}
                  width={100}
                  height={100}
                />
                فارسی
              </li>
              <li
                onClick={() => {
                  setLanguage("en");
                  setSelectLang(!selectLang);
                }}
                className={`flex items-center px-4 py-2 cursor-pointer text-xs hover:bg-gray-100 ${exo.className}`}
              >
                <Image
                  src="./Icons/UK-flag.svg"
                  alt="USA flag"
                  className={`w-5 h-5 capitalize${language === "pe" ? "ml-2" : "mr-2"
                    }`}
                  width={100}
                  height={100}
                />
                English
              </li>
            </motion.ul>
          </div>
          <form
            className="flex items-center justify-end w-full max-w-xs"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <motion.div
              className={`relative w-full ${!searchButton && "hidden"}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: searchButton ? 1 : 0,
                scale: searchButton ? 1 : 0.8,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="text"
                id="simple-search"
                className="bg-darkGray text-gray text-sm rounded-lg block w-full ps-6 p-2.5 placeholder:text-gray focus:outline-none"
                placeholder="جست و جو..."
                maxLength={25}
              />
            </motion.div>
            <motion.button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg"
              onClick={searchButtonHandler}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-6 h-6 text-darkGray"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </motion.button>
          </form>
        </div>
        <h2
          className={`text-4xl px-6 mt-24 font-extrabold ${language !== "pe" && roboto.className + " capitalize"
            }`}
        >
          {selectedCategory}
        </h2>
        <div className="grid sm:grid-cols-2 items-center justify-center mt-8 mb-32">
          {plants.map((flower, id) => (
            <motion.div
              className="bg-white rounded-2xl m-5 min-h-[300px]  w-fit"
              key={id}
              initial={{ opacity: 0, y: 10 }} // Start with the element off-screen
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position when in view
              viewport={{ amount: 0.1 }} // Trigger animation when 30% of the element is visible
              transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
            >
              <FlowerCard flower={flower} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainBodyPc;

{
  /* 
      <h2 className="text-4xl px-6 mt-12 font-extrabold">خانه</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center mt-12 mb-32">
        {plants.map((flower, id) => (
          <div
            className="bg-white rounded-2xl m-5 w-52 min-h-[300px] p-5"
            key={id}
          >
            <FlowerCard flower={flower} />
          </div>
        ))}
      </div>
     */
}
