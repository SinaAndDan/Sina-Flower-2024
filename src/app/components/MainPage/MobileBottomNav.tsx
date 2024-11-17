"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsBag } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { PiPlant } from "react-icons/pi";
import { SlHeart } from "react-icons/sl";

interface MenuItem {
  label: string;
  path: string;
  activePaths: string[];
  icon: JSX.Element;
  activeIcon: JSX.Element;
}

const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();

  // Define your menu items with paths and corresponding icons
  const menuItems: MenuItem[] = [
    {
      label: "account",
      path: "/account",
      activePaths: ["/account", "/account/signin", "/account/login"],
      icon: <GoPerson className="w-7 h-7 text-white text-opacity-70" />,
      activeIcon: <GoPerson className="w-7 h-7 text-white " />,
    },
    {
      label: "cart",
      path: "/cart",
      activePaths: ["/cart"],
      icon: <BsBag className="w-7 h-7 text-white text-opacity-70" />,
      activeIcon: <BsBag className="w-7 h-7 text-white " />,
    },
    {
      label: "favorite",
      path: "/favorite",
      activePaths: ["/favorite"],
      icon: <SlHeart className="w-7 h-7 text-white text-opacity-70" />,
      activeIcon: <SlHeart className="w-7 h-7 text-white " />,
    },
    {
      label: "Home",
      path: "/",
      activePaths: ["/"],
      icon: <PiPlant className="w-7 h-7 text-white text-opacity-70" />,
      activeIcon: <PiPlant className="w-7 h-7 text-white " />,
    },
  ];

  const isActive = (item: MenuItem): boolean =>
    item.activePaths.some((path: string) => pathname === path);

  return (
    <div className="w-full min-h-[60px] bg-green rounded-full z-50 fixed bottom-0 flex justify-between items-center px-7 md:hidden">
      {menuItems.map((item) => {
        const active = isActive(item);
        return (
          <Link
            key={item.path}
            href={item.path}
            className="flex flex-col items-center"
          >
            {active ? item.activeIcon : item.icon}
            {active && (
              <span className="w-1 h-1 bg-white rounded-full mt-1"></span>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileBottomNav;
