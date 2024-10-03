import LogIn from "@/app/components/loginPage/login";
import SignInPage from "@/app/components/loginPage/signin";
import MobileBottomNav from "@/app/components/MainPage/MobileBottomNav";
import React from "react";

const SignIn: React.FC = () => {
  return (
    <>
      <SignInPage />
      <MobileBottomNav />
    </>
  );
};

export default SignIn;
