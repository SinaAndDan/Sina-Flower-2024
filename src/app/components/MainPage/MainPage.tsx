import React from "react";
import MobileBottomNav from "./MobileBottomNav";
import Header from "./Header";
import PcNav from "./PcNav";
import MainBody from "./MainBody";

const MainPage = () => {
  return (
    <>
      <PcNav />
      <div className="flex">
        <Header />
        <MainBody />
      </div>
      <MobileBottomNav />
    </>
  );
};

export default MainPage;
