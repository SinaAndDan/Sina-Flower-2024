import React from "react";
import MobileBottomNav from "./MobileBottomNav";
import Header from "./Header";
import Hero from "./Hero";
import FlowerContainer from "./Products/FlowerContainer";

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <MobileBottomNav />
      <FlowerContainer />
    </>
  );
};

export default MainPage;
