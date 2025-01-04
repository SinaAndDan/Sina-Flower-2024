import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";


export const metadata: Metadata = {
  title: "گل سینا",
  description: "Order your favorite plant with personalized care tips and customizable options tailored to your needs.",
  icons: {
    icon: [
      { url: "/images/golesina96x96.png", sizes: "96x96" },
      { url: "/images/golesina48x48.png", sizes: "48x48" },
      { url: "/images/golesina192x192.png", sizes: "192x192" },
      { url: "/images/golesina512x512.png", sizes: "512x512" },
    ],
  },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="fa" dir="rtl">
        <body>{children}
          <ServiceWorkerRegister />
        </body>
      </html>
    </LanguageProvider>
  );
}
