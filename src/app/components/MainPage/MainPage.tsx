import React from "react";
import MobileBottomNav from "./MobileBottomNav";
import Header from "./Header";
import Hero from "./Hero";
import FlowerContainer from "./Products/FlowerContainer";
import CommercialCard from "./CommercialCard";

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <FlowerContainer />
      <CommercialCard />
      <MobileBottomNav />
    </>
  );
};

export default MainPage;
