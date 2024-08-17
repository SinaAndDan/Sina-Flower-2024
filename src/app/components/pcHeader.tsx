import React from "react";

const PcHeader = () => {
  return (
    <nav className="sm:py-4 container mx-auto flex justify-between invisible sm:visible">
      <div className="flex justify-between basis-1/2">
        <a href="" className="">
          Logo
        </a>
        <div></div>
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">About Us</a>
      </div>
      <div className="flex basis-1/3 justify-around place-self-end">
        <a href="">search</a>
        <a href="">card</a>
      </div>
    </nav>
  );
};

export default PcHeader;
