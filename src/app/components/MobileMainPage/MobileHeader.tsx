"use client";

import React, { useState } from "react";

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-white">
      <div className="flex flex-wrap items-center justify-between p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="text-2xl font-semibold text-green-400">
            Sina Flower
          </span>
        </a>
        <div className="flex">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-500 hover:bg-gray-100 focus:outline-none rounded-lg p-2.5 me-1"
          >
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
            <span className="sr-only">Search</span>
          </button>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
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
          </button>
        </div>
        <div
          className={`w-full ${isOpen ? "block" : "hidden"}`}
          id="navbar-search"
        >
          <div className="relative mt-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
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
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 mt-4 space-y-2 font-medium border rounded-lg bg-gray-50 rtl:space-y-reverse">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileHeader;
