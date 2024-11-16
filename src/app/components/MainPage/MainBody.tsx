"use client";

import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import FlowerCard from "./FlowerCard";
import { supabase } from "../../../../lib/supabaseClient";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

interface Plant {
  id: string;
  name: string;
  price: number;
  picture: string;
  width: number;
  height: number;
}

const MainBodyPc: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);

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
  return (
    <>
      <div className="bg-gray md:block flex-1 hidden">
        <div className="flex justify-end pt-12 px-6">
          <IoSearch className="w-8 h-8 text-black text-opacity-80" />
        </div>
        <h2 className="text-4xl px-6 mt-12 font-extrabold">پیشنهادی</h2>

        <div className="rounded-2xl m-5 w-[90vw] h-auto mx-auto">
          <Swiper
            dir="rtl"
            slidesPerView={3}
            centeredSlides={false}
            slidesOffsetAfter={50}
            loop={true}
            spaceBetween={10}
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
        <h2 className="text-4xl px-6 mt-12 font-extrabold">فیکوس</h2>

        <div className="rounded-2xl m-5 w-[90vw] h-auto mx-auto">
          <Swiper
            dir="rtl"
            slidesPerView={3}
            centeredSlides={false}
            slidesOffsetAfter={50}
            loop={true}
            spaceBetween={10}
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
        <h2 className="text-4xl px-6 mt-12 font-extrabold">کاکتوس</h2>

        <div className="rounded-2xl m-5 w-[90vw] h-auto mx-auto">
          <Swiper
            dir="rtl"
            slidesPerView={3}
            centeredSlides={false}
            slidesOffsetAfter={50}
            loop={true}
            spaceBetween={10}
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
      <div className="bg-gray flex-1 mr-20 md:hidden">
        <div className="flex justify-end pt-12 px-6">
          <IoSearch className="w-8 h-8 text-black text-opacity-80" />
        </div>
        <h2 className="text-4xl px-6 mt-12 font-extrabold">پیشنهادی</h2>
        <div className="grid sm:grid-cols-2 items-center justify-center mt-12 mb-32">
          {plants.map((flower, id) => (
            <div
              className="bg-white rounded-2xl m-5 min-h-[300px] p-5 w-fit"
              key={id}
            >
              <FlowerCard flower={flower} />
            </div>
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
