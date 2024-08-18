import React from "react";
import MobileBottomNav from "./MobileBottomNav";
import MobileHeader from "./MobileHeader";
import MobileHero from "./MobileHero";

const MobileMainPage = () => {
  return (
    <>
      <MobileHeader />
      <MobileHero />
      <MobileBottomNav />
    </>
  );
};

export default MobileMainPage;
