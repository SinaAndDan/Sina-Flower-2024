import React from "react";
import MobileBottomNav from "./MobileBottomNav";
import Header from "./Header";
import MainBody from "./MainBody";

const MainPage = () => {
  return (
    <>
      <div className="flex">
        <Header />
        <MainBody />
      </div>
      <MobileBottomNav />
    </>
  );
};

export default MainPage;
