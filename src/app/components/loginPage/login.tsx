import React from "react";
import Image from "next/image";

const LogInPage: React.FC = () => {
  return (
    <div className="image-containerII font-sahel">
      <Image
        width={300}
        height={300}
        src="/login.jpg"
        alt="Full Screen Image"
        className=" -z-20"
        priority={true} // Optional: Loads the image with high priority
      />
    </div>
  );
};

export default LogInPage;
