"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type LanguageContextProps = {
  language: string;
  setLanguage: (lang: string) => void;
  content: Record<string, string>;
  direction: "rtl" | "ltr";
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState("pe");
  const [content, setContent] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState<"ltr" | "rtl">("rtl");

  const changeLanguage = async (lang: string) => {
    setLanguage(lang);
    setDirection(lang === "pe" ? "rtl" : "ltr");
    try {
      const response = await fetch(`/locales/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load language file: ${lang}`);
      }
      const data = await response.json();
      setContent(data);
      localStorage.setItem("language", lang);
    } catch (error) {
      console.error("Error loading language file:", error);
    }
  };
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "pe";
    changeLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, content, direction }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a languageProvider");
  }
  return context;
};
