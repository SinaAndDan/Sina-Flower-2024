import React from "react";
import ReadMore from "./ReadMore";
import { useGlobalContext } from "src/app/context/GlobalContext";
import { AboutProps } from "src/types/detail";

const About: React.FC<AboutProps> = ({ englishSum, persianSum }) => {
  const { language } = useGlobalContext();
  return <ReadMore text={language === "pe" ? persianSum : englishSum} />;
};

export default About;
