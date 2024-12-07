"use client";

import React, { useState } from "react";
import MobileBottomNav from "./MobileBottomNav";
import Header from "./Header";
import PcNav from "./PcNav";
import MainBody from "./MainBody";
import { useLanguage } from "src/app/context/LanguageContext";

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("پیشنهادی");
  const { language } = useLanguage();

  return (
    <>
      <PcNav />
      <div className="flex" dir={language === "pe" ? "rtl" : "ltr"}>
        <Header
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <MainBody selectedCategory={selectedCategory} />
      </div>
      <MobileBottomNav />
    </>
  );
};

export default MainPage;
