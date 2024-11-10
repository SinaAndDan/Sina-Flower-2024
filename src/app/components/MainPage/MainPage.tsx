import React from "react";
import MobileBottomNav from "./MobileBottomNav";
import Header from "./Header";
import MainBody from "./MainBody";
import PcNav from "./PcNav";

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
