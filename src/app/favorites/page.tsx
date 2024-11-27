"use client";

import React, { useEffect, useState } from "react";
import PcNav from "../components/MainPage/PcNav";
import { IoCloseOutline, IoSearch } from "react-icons/io5";
import { supabase } from "../../../lib/supabaseClient";
import Header from "../components/MainPage/Header";
import FavoriteCard from "../components/favoritesPage/FavoriteCard";
import MobileBottomNav from "../components/MainPage/MobileBottomNav";
import { AnimatePresence, motion } from "motion/react";
import NoFavorites from "../components/favoritesPage/NoFavorites";

interface Plant {
  id: string;
  name: string;
  price: number;
  picture: string;
  width: number;
  height: number;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Plant[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const { data, error } = await supabase
        .from("plants")
        .select("*")
        .eq("favorite", true);

      if (error) {
        console.error("Error fetching plants:", error);
        setFavorites([]);
      } else {
        setFavorites(data || []);
      }
    };
    fetchFavorites();
  }, []);

  const removeFavorite = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((flower) => flower.id !== id)
    );
  };
  return (
    <>
      <PcNav />
      <div className="bg-gray flex-1 font-yekan pb-20 pt-12">
        {favorites.length === 0 ? (
          <NoFavorites />
        ) : (
          <div className="container mx-auto px-2 sm:px-0">
            <h2 className="text-4xl font-extrabold ">مورد علاقه ها</h2>
            <div className="flex flex-col lg:grid grid-cols-2 2xl:grid-cols-3 gap-5 sm:gap-x-16 xl:gap-x-20 items-center justify-center mt-8 mb-32">
              <AnimatePresence>
                {favorites.map((flower) => (
                  <motion.div
                    initial={{ scale: 0 }} // start scaled down
                    animate={{ scale: 1 }} // target size (normal size)
                    exit={{ scale: 0 }} // scale down when removed
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl w-full h-32 md:h-36 lg:h-40"
                    key={flower.id}
                  >
                    <FavoriteCard
                      flower={flower}
                      onRemove={() => removeFavorite(flower.id)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
      <MobileBottomNav />
    </>
  );
};

export default Favorites;
