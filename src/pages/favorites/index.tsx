"use client";

import React, { useEffect, useState } from "react";
import PcNav from "../../../components/MainPage/PcNav";
import { supabase } from "../../../lib/supabaseClient";
import FavoriteCard from "../../../components/favoritesPage/FavoriteCard";
import MobileBottomNav from "../../../components/MainPage/MobileBottomNav";
import { AnimatePresence, motion } from "motion/react";
import NoFavorites from "../../../components/favoritesPage/NoFavorites";
import Loading from "../../../components/Layout/Loading";
import { PlantProps } from "src/types/plant";
import { useLanguage } from "../../../context/GlobalContext";
import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<PlantProps[]>([]);
  const [loading, SetLoading] = useState(false);
  const { content, language } = useLanguage();

  useEffect(() => {
    const fetchFavorites = async () => {
      SetLoading(true);
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
      SetLoading(false);
    };
    fetchFavorites();
  }, []);

  const removeFavorite = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((flower) => flower.id !== id)
    );
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <PcNav />
      <div className="bg-gray flex-1 font-yekan pb-20 pt-12">
        {favorites.length === 0 ? (
          <NoFavorites />
        ) : (
          <div className="container mx-auto px-2 sm:px-0">
            <h2
              className={`text-4xl font-extrabold ${language !== "pe" && roboto.className
                }`}
            >
              {content.favoriteTitle}
            </h2>
            <div className="flex flex-col lg:grid grid-cols-2 2xl:grid-cols-3 gap-5 sm:gap-x-16 xl:gap-x-20 items-center justify-center mt-8 mb-32">
              <AnimatePresence>
                {favorites.map((flower) => (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
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
