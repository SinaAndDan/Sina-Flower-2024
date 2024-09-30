"use client";

import { BiCategory } from "react-icons/bi";

const Header: React.FC = () => {
  return (
    <nav className="bg-white border-gray-200 h-screen w-20 fixed overflow-y-auto -z-10">
      <div className="flex flex-col h-[50%] justify-between pt-12 ">
        <div className="flex items-center justify-center">
          <BiCategory className="w-8 h-8 text-black text-opacity-80 " />
        </div>
        <div className="flex flex-col">
          <div className="flex relative">
            <span className="absolute w-3 h-10 bg-green rounded-3xl -right-1.5 top-1/2 -translate-y-1/2"></span>
            <div className="rotate-90 text-black font-extrabold ">پیشنهادی</div>
          </div>
          <div className="flex relative mt-20">
            {/* <span className="absolute w-3 h-10 bg-green rounded-3xl -right-1.5 top-1/2 -translate-y-1/2"></span> */}
            <div className="rotate-90 text-black text-opacity-50 font-extrabold ">
              فیکوس
            </div>
          </div>
          <div className="flex relative mt-20">
            {/* <span className="absolute w-3 h-10 bg-green rounded-3xl -right-1.5 top-1/2 -translate-y-1/2"></span> */}
            <div className="rotate-90 text-black text-opacity-50 font-extrabold ">
              کاکتوس
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
