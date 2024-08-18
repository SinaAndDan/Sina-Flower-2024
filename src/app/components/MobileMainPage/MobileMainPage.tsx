import React from "react";
import MobileBottomNav from "./MobileBottomNav";
import MobileHeader from "./MobileHeader";
import MobileHero from "./MobileHero";
import FlowerContainer from "./Products/FlowerContainer";

const MobileMainPage = () => {
  return (
    <>
      <MobileHeader />
      <MobileHero />
      <MobileBottomNav />
      <FlowerContainer />
    </>
  );
};

export default MobileMainPage;
