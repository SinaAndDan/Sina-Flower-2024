import React from "react";
import Image from "next/image";

const LogInPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center font-sahel h-screen">
        <div className="relative h-1/3 w-3/4 md:h-[50vh] sm:h-[30vh]">
          <Image
            src="/loginPic.png"
            alt="Header Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full"
          />
        </div>
        <div className="relative w-full">
          <div className="flex flex-col absolute left-1/2 translate-x-3">
            <div className="text-greenlogIn text-2xl mt-12 font-semibold font-sahel ">
              خوش آمدید
            </div>
            <p className="text-greenlogIn text-opacity-65 mt-3 text-xs">
              به حساب خود وارد شوید
            </p>
          </div>
          <Image
            width={150}
            height={150}
            src="/sideimgV.png"
            alt="Full Screen Image"
            className="-z-20 absolute left-0 top-12"
            priority={true} // Optional: Loads the image with high priority
          />
        </div>
      </div>
      <div>
        <input />
      </div>
    </>
  );
};

export default LogInPage;
