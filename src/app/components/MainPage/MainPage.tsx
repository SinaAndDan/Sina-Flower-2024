"use client";

import React, { useState } from "react";
import MobileBottomNav from "./MobileBottomNav";
import Header from "./Header";
import PcNav from "./PcNav";
import MainBody from "./MainBody";

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("پیشنهادی");
  return (
    <>
      <PcNav />
      <div className="flex">
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
