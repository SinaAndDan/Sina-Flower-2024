"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Define the context types
type GlobalContextProps = {
  language: string;
  setLanguage: (lang: string) => void;
  content: Record<string, string>;
  direction: "rtl" | "ltr";
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

// Create the context
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState("pe");
  const [content, setContent] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState<"ltr" | "rtl">("rtl");
  const [isLoading, setIsLoading] = useState(false);

  // Change language function
  const changeLanguage = async (lang: string) => {
    startLoading();
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
    } finally {
      stopLoading();
    }
  };

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "pe";
    changeLanguage(savedLanguage);
  }, []);

  // Set HTML direction based on language
  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);

  // Loading state handlers
  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        content,
        direction,
        isLoading,
        startLoading,
        stopLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
