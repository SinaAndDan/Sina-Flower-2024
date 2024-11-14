"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GrFormNext } from "react-icons/gr";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";

const ProfilePage: React.FC = () => {
  console.log("ProfilePage component mounted");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const router = useRouter();
  console.log("ProfilePage component is rendering"); // Add this outside of useEffect

  useEffect(() => {
    console.log("use efect is running ");
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Retrieved token:", token);

        if (!token) {
          console.log("No token found, redirecting to login...");
          router.push("/login");
          return;
        }

        console.log("Fetching user profile...");
        const response = await fetch("http://localhost:5000/account/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text(); // Log the response text for debugging
          console.error("Response is not JSON. Response text:", text);
          throw new Error("Response is not JSON");
        }

        const data = await response.json();
        console.log("Fetched user data before setting state:", data);
        setUser(data);
        localStorage.setItem("userData", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    const loadUserProfileFromStorage = () => {
      const storedUserData = localStorage.getItem("userData");
      console.log("Stored user data from local storage:", storedUserData); // Log stored data
      if (storedUserData) {
        setUser(JSON.parse(storedUserData));
      }
    };

    fetchUserProfile();
    loadUserProfileFromStorage();
  }, []);

  const backToAccount = () => {
    router.push("/account");
  };

  const goForEdit = () => {
    router.push("/account/profile/edit");
  };

  return (
    <div className="flex flex-col h-screen font-yekan">
      <div className="flex items-center justify-center w-full min-h-52 bg-greenlogIn rounded-br-xl relative">
        <button
          className="bg-loginInput rounded-full w-8 h-8 flex items-center justify-center absolute right-4 top-4"
          onClick={backToAccount}
        >
          <GrFormNext className="w-6 h-6 text-greenlogIn cursor-pointer translate-x-px" />
        </button>
        <span className="flex flex-col items-center rounded-full w-20 h-20 my-12 bg-blue">
          <Image
            width={200}
            height={200}
            src="/login.jpg"
            alt="Full Screen Image"
            className="p-0.5 w-20 h-20 rounded-full"
            priority={true} // Optional: Loads the image with high priority
          />
          <div className="flex items-center justify-center mt-2">
            <p className="text-white">Active</p>
            <span className="w-2 h-2 bg-blue rounded-full"></span>
          </div>
        </span>
        <button
          className=" bg-greenlogIn rounded-full w-12 h-12 flex items-center justify-center absolute left-0 -bottom-6"
          onClick={goForEdit}
        >
          <MdKeyboardDoubleArrowDown className="w-8 h-8 text-white" />
        </button>
      </div>
      <div className="font-yekan w-full px-6 mt-12">
        <div>
          <p className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            نام و نام خانوادگی
          </p>
          <p className=" text-greenlogIn py-1 ">{user.name}</p>
        </div>
        <div>
          <p className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">
            ایمیل
          </p>
          <p className=" text-greenlogIn py-1 ">{user.email}</p>
        </div>
        <div>
          <p className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">
            شماره تلفن
          </p>
          <p className=" text-greenlogIn py-1 ">{user.phone || "نا مشخص"}</p>
        </div>
        <div>
          <p className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">
            شهر
          </p>
          <p className=" text-greenlogIn py-1 ">{user.city || "تهران"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
