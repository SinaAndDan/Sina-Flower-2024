import React from "react";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";
import { TiSocialFacebookCircular } from "react-icons/ti";
import Image from "next/image";
import flowerLogo from "../../../../public/PurpuleFlower.jpg";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={flowerLogo}
                className="h-8"
                alt="Flowbite Logo"
                width={32}
                height={32}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                گل سینا
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                منابع
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    گل سینا
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    راهنمایی آنلاین
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                مارا دنبال کنید
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    وبلاگ
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    دانستنی ها
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                موارد قانونی
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    چطور اعتماد کنم ؟
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    شرایط و قوانین
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 {""}گل سینا مرجع آنلاین فروش گل در سراسر کشور
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <TiSocialFacebookCircular />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
              <TbBrandDiscord />
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
              <FiTwitter />

              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
              <PiLinkedinLogoLight />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
