import React from "react";

const NavMenu: React.FC = () => {
  return (
    <div className="w-full mt-3" id="navbar-search">
      <SearchInput />
      <ul className="flex flex-col p-4 mt-4 space-y-2 font-medium border rounded-lg bg-gray-50 rtl:space-y-reverse">
        {menuItems.map(({ label, href, active }) => (
          <li key={label}>
            <a
              href={href}
              className={`block py-2 px-3 rounded ${
                active
                  ? "text-white bg-blue-700"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SearchInput = () => (
  <div className="relative">
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
);

const menuItems = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#", active: false },
  { label: "Services", href: "#", active: false },
];

export default NavMenu;
