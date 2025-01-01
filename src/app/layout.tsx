'use client'; // Ensures the component works as a client component

import { useEffect } from "react";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Service Worker registration
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").then(
        (registration) => {
          console.log("Service Worker registered successfully:", registration);
        },
        (error) => {
          console.error("Service Worker registration failed:", error);
        }
      );
    }
  }, []);

  return (
    <LanguageProvider>
      <html lang="fa" dir="rtl">
        <body>{children}</body>
      </html>
    </LanguageProvider>
  );
}
