"use client";

import React, { useEffect, useState } from "react";
import PcNav from "../components/MainPage/PcNav";
import { IoCloseOutline, IoSearch } from "react-icons/io5";
import { supabase } from "../../../lib/supabaseClient";
import Header from "../components/MainPage/Header";
import FavoriteCard from "../components/favoritesPage/FavoriteCard";
import MobileBottomNav from "../components/MainPage/MobileBottomNav";

interface Plant {
  id: string;
  name: string;
  price: number;
  picture: string;
  width: number;
  height: number;
}

const Favorites: React.FC = () => {
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
      <PcNav />
      <div className="bg-gray flex-1 font-yekan pb-20 ">
        <div className="flex justify-end pt-12 px-6">
          <IoSearch className="w-8 h-8 text-black text-opacity-80 md:hidden" />
        </div>
        <h2 className="text-4xl mt-12 font-extrabold sm:max-w-[90%] sm:mx-auto mx-2">
          مورد علاقه ها
        </h2>
        <div className="flex flex-col lg:grid grid-cols-2 2xl:grid-cols-3 gap-5 sm:gap-x-16 xl:gap-x-20 items-center justify-center mt-8 mb-32 mx-2 max-w-[90%] sm:mx-auto">
          {plants.map((flower, id) => (
            <div
              className="bg-white rounded-3xl w-full h-32 md:h-36 lg:h-40"
              key={id}
            >
              <FavoriteCard flower={flower} key={id} />
            </div>
          ))}
        </div>
      </div>
      <MobileBottomNav />
    </>
  );
};

export default Favorites;
