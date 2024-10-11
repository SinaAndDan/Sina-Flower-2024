"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const router = useRouter();

  // fetch("http://localhost:5000/account/profile", {
  //   method: "GET",
  //   credentials: "include",
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       return response.text().then((text) => {
  //         throw new Error(`Error: ${response.status}, Message: ${text}`);
  //       });
  //     }
  //     return response.json();
  //   })
  //   .then((data) => console.log(data))
  //   .catch((err) => console.error("Error fetching profile:", err));

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        console.log("Fetching user profile...");
        const response = await fetch("http://localhost:5000/account/profile", {
          method: "GET",
          credentials: "include",
        });

        console.log("Response status:", response.status);

        // Check if the response is OK
        if (!response.ok) {
          console.error("Error response received:", response.status);
          const text = await response.text(); // Read the response body
          console.log("Response body:", text); // Log the response body
          if (response.status === 401) {
            console.error("Unauthorized, redirecting to login...");
            router.push("/account/login");
            return;
          }
          throw new Error("Failed to fetch profile data");
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          console.error("Response is not JSON. Response text:", text);
          throw new Error("Response is not JSON");
        }

        // Set user data if the response is valid
        const data = await response.json();
        console.log("Fetched user data:", data);
        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        router.push("/account/login"); // Redirect to login if an error occurs
      }
    };

    fetchUserProfile(); // Call the function to fetch the profile on component mount
  }, [router]);

  // Handlers for navigation
  const backToAccount = () => {
    router.push("/account");
  };

  const goForEdit = () => {
    router.push("/account/profile/edit");
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone || "Not provided"}</p>
      <p>City: {user.city || "Not provided"}</p>
      <button onClick={backToAccount}>Back to Account</button>
      <button onClick={goForEdit}>Edit Profile</button>
    </div>
  );
};

export default ProfilePage;
