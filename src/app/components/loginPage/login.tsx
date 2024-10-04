import React from "react";
import Image from "next/image";

const LogInPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center font-sahel h-screen">
        <div className="h-2/5 w-full flex flex-col relative">
          <Image
            src="/loginPic.jpg"
            width={600}
            height={1200}
            alt="Header Image"
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full z-0"
          />
          <div className="absolute -bottom-1 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f3f4f5"
                fill-opacity="1"
                d="M0,256L80,229.3C160,203,320,149,480,122.7C640,96,800,96,960,90.7C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
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
