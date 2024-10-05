import React from "react";
import Image from "next/image";
import { IoPerson } from "react-icons/io5";
import { MdLock } from "react-icons/md";

const LogInPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center font-sahel image-containerII">
        <div className="h-full w-full flex flex-col relative">
          <Image
            src="/loginPicIII.jpg"
            width={600}
            height={1200}
            alt="Header Image"
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full -z-20 opacity-95" // Added opacity class
          />
          <div className="absolute -bottom-1 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f3f4f5"
                fillOpacity="1"
                d="M0,256L80,229.3C160,203,320,149,480,122.7C640,96,800,96,960,90.7C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <Image
        width={150}
        height={150}
        src="/sideimgVI.png"
        alt="Full Screen Image"
        className="-z-20 absolute left-0"
        priority={true} // Optional: Loads the image with high priority
      />
      <div className="flex flex-col mx-2 items-center">
        <div className="text-greenlogIn text-2xl mt-10 font-sahel pl-16">
          خوش آمدید
        </div>
        <p className="text-greenlogIn text-opacity-65 mt-3 text-sm font-sahel pl-16">
          به حساب خود وارد شوید
        </p>
        <form className="font-yekan w-full px-6">
          <div className="w-full relative mt-20">
            <input
              type="text"
              className=" bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-9 rounded-lg active:outline-greenlogIn focus:outline-greenlogIn focus:transition-opacity	"
              placeholder="نام کاربری"
            />
            <div
              className="absolute inset-y-0 right-2 pl-3  
                    flex items-center  
                    pointer-events-none"
            >
              <IoPerson className="text-greenlogIn" />
            </div>
          </div>
          <div className="w-full relative mt-3">
            <input
              type="text"
              className=" bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-9 rounded-lg  active:outline-greenlogIn focus:outline-greenlogIn"
              placeholder="کلمه عبور"
            />
            <div
              className="absolute inset-y-0 right-2 pl-3  
                    flex items-center  
                    pointer-events-none"
            >
              <MdLock className="text-greenlogIn" />
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                value=""
                className="w-4 h-4 text-green bg-greenlogIn rounded-full accent-greenlogIn"
              />
              <label
                htmlFor="rememberMe"
                className="ms-2 font-medium text-xs text-greenlogIn"
              >
                مرا بخاطر بسپار
              </label>
            </div>
            <p className="text-xs text-greenlogIn font-bold">فراموشی رمز؟</p>
          </div>
          <div className="flex flex-col absolute bottom-16 left-1/2 -translate-x-1/2 w-full px-6">
            <button className="w-full bg-greenlogIn text-white py-2 rounded-lg font-yekan">
              ورود
            </button>
            <p className="text-sm font-light text-center mt-4">
              هنوز ثبت نام نکرده اید؟
              <a
                href="/account/signin"
                className="text-greenlogIn font-extrabold hover:underline mx-1"
              >
                ثبت نام
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogInPage;
