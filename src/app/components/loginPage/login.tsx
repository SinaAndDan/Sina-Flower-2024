import React from "react";
import Image from "next/image";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div className="image-container font-sahel">
      <Image
        width={300}
        height={300}
        src="/login.jpg"
        alt="Full Screen Image"
        className=" -z-20"
        priority={true} // Optional: Loads the image with high priority
      />
      <div className="bg-bgpic bg-opacity-10 w-full h-screen relative z-10">
        {/* Changed z-index */}
        <h5 className="z-20 text-4xl leading-relaxed absolute top-32 px-8 text-white">
          بهترین برنامه
          <br /> برای
          <br /> خرید گل و گیاه
        </h5>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center z-50 cursor-pointer">
          <Link href="/account/login">
            <button className="bg-gray rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 px-7 py-2 text-xl text-white">
              ورود
            </button>
          </Link>
          <Link
            href="/account/signin"
            className="mt-6 text-white cursor-pointer"
          >
            {/* Added cursor-pointer */}
            ساخت حساب کاربری
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
