import React from "react";
import ReadMore from "./ReadMore";
import { useLanguage } from "src/app/context/LanguageContext";
import { AboutProps } from "src/types/detail";

const About: React.FC<AboutProps> = ({ englishSum, persianSum }) => {
  const { language } = useLanguage();
  return <ReadMore text={language === "pe" ? persianSum : englishSum} />;
};

export default About;
