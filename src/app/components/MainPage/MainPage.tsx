import React from "react";
import MobileBottomNav from "./MobileBottomNav";
import Header from "./Header";
import Footer from "./Footer";
import MainBody from "./MainBody";

const MainPage = () => {
  return (
    <>
      <div className="flex">
        <Header />
        <MainBody />
      </div>
      <MobileBottomNav />
      <Footer />
    </>
  );
};

export default MainPage;
