"use client";

import React, { useState } from "react";
import NavMenu from "./NavMenu";

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-slate-100">
      <div className="flex items-center justify-between p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="text-2xl font-semibold text-green-400">
            Sina Flower
          </span>
        </a>
        <div className="flex">
          <IconButton onClick={toggleMenu} ariaLabel="Search">
            <SearchIcon />
          </IconButton>
          <IconButton onClick={toggleMenu} ariaLabel="Open main menu">
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      {isMenuOpen && <NavMenu />}
    </nav>
  );
};

const IconButton: React.FC<{
  onClick: () => void;
  ariaLabel: string;
  children: React.ReactNode;
}> = ({ onClick, ariaLabel, children }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className="text-gray-500 hover:bg-gray-100 focus:outline-none rounded-lg p-2.5 me-1"
  >
    {children}
  </button>
);

const SearchIcon = () => (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
);

export default MobileHeader;
