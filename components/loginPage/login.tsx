"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoPerson } from "react-icons/io5";
import { MdLock } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useLanguage } from "src/app/context/GlobalContext";

const LogInPage: React.FC = () => {
  const router = useRouter();

  // State to store form data, changed username to email
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { content, language } = useLanguage()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email, // Send email instead of username
          password: formData.password,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 200) {
        const token = data.token; // Assuming the token is in data.token
        localStorage.setItem("token", token); // Store the token in localStorage
        router.push("/account/profile"); // Redirect to profile page
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const backMainPage = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center font-sahel image-containerII md:min-h-[40vh] 2xl:min-h-[60vh]">
        <div className="h-full w-full flex flex-col relative">
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mx-8 mt-16 bg-loginInput rounded-full w-10 h-10 flex items-center justify-center sm:hidden"
            onClick={backMainPage}
          >
            <GrFormNext className={`w-8 h-8 text-greenlogIn cursor-pointer ${language === 'pe' ? 'translate-x-px' : 'rotate-180 -translate-x-px'}`} />
          </motion.span>
          <Image
            src="/images/loginPicIII.jpg"
            width={800}
            height={1200}
            alt="Header Image"
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full -z-20 opacity-95"
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
      <section className="">
        <Image
          width={150}
          height={150}
          src="/images/sideimgVI.png"
          alt="Full Screen Image"
          className="-z-20 absolute left-0 md:min-w-[200px] md:min-h-[200px] xl:w-auto xl:h-auto"
          priority={true} // Optional: Loads the image with high priority
        />
        <div className="flex flex-col px-2 items-center container mx-auto xl:-translate-y-28">
          <div className="text-greenlogIn text-2xl mt-10 font-sahel pl-16 md:pl-0 sm:text-3xl">
            {content.welcome}          </div>
          <p className="text-greenlogIn text-opacity-65 mt-3 text-sm font-sahel pl-16 md:pl-0 sm:text-xl">
            {content.loginAccount}
          </p>
          <form className="font-yekan w-full px-6 md:max-w-[55%] lg:max-w-[40%] mx-auto">
            <div className="w-full relative mt-20 2xl:mt-10">
              <input
                type="text"
                className=" bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-9 rounded-lg active:outline-greenlogIn focus:outline-greenlogIn focus:transition-opacity md:min-h-[40px] md:text-lg"
                placeholder={content.userName}
                value={formData.email}
                onChange={handleChange}
              />
              <div
                className={`absolute inset-y-0  
                    flex items-center  
                    pointer-events-none ${language === 'pe' ? 'right-2 pl-3' : 'left-2 pr-3'}`}
              >
                <IoPerson className="text-greenlogIn" />
              </div>
            </div>
            <div className="w-full relative mt-3">
              <input
                type="text"
                className=" bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-9 rounded-lg  active:outline-greenlogIn focus:outline-greenlogIn md:min-h-[40px] md:text-lg"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={content.password}
                required
              />
              <div
                className={`absolute inset-y-0   
                    flex items-center  
                    pointer-events-none ${language === 'pe' ? 'right-2 pl-3' : 'left-2 pr-3'}`}
              >
                <MdLock className="text-greenlogIn" />
              </div>
            </div>
            <div className="flex justify-between mt-2 md:mt-5">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  className="w-4 h-4 text-green bg-greenlogIn rounded-full accent-greenlogIn"
                />
                <label
                  htmlFor="rememberMe"
                  className="ms-2 font-medium text-xs md:text-sm text-greenlogIn"
                >
                  {content.rememberMe}
                </label>
              </div>
              <p className="text-xs text-greenlogIn font-bold md:text-sm">
                {content.forgetPass}
              </p>
            </div>
          </form>
        </div>
      </section>
      <div className="container mx-auto mt-auto">
        <div className="w-full px-6 my-8 z-0 md:max-w-[55%] lg:max-w-[40%] mx-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="w-full bg-gradient-to-t from-[#0f4a1e] via-[#1f7853] to-[#1e8e63] text-white py-2 rounded-lg font-yekan"
          >
            {content.login}
          </motion.button>
          <p className="text-sm font-light text-center mt-4 text-black text-opacity-80">
            {content.haveNotSignedUp}
            <a
              href="/account/signin"
              className="text-greenlogIn font-extrabold hover:underline mx-1"
            >
              {content.signUp}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
