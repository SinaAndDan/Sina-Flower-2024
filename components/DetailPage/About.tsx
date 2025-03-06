import React from "react";
import ReadMore from "./ReadMore";
import { useGlobalContext } from "context/GlobalContext";
import { AboutProps } from "types/detail";

const About: React.FC<AboutProps> = ({ englishSum, persianSum }) => {
  const { language } = useGlobalContext();
  return <ReadMore text={language === "pe" ? persianSum : englishSum} />;
};

export default About;
