import Image from "next/image";
import PcHeader from "./components/pcHeader";
import MobileMainPage from "./components/MobileMainPage/MobileMainPage";
import MobileHeader from "./components/MobileMainPage/MobileHeader";

export default function Home() {
  return (
    <>
      {/* <PcHeader /> */}
      <MobileHeader />
      <MobileMainPage />
      <main className="flex min-h-screen flex-col items-center justify-between bg-slate-400"></main>
    </>
  );
}
