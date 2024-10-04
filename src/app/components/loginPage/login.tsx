import React from "react";
import Image from "next/image";

const LogInPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center font-sahel">
      <div className="image-containerII">
        <Image
          width={1000}
          height={1000}
          src="/loginPicII.png"
          alt="Full Screen Image"
          className=" -z-20 rotate-180"
          priority={true} // Optional: Loads the image with high priority
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
  );
};

export default LogInPage;
