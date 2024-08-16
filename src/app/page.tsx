import Image from "next/image";
import PcHeader from "./components/pcHeader";

export default function Home() {
  return (
    <>
      <PcHeader />
      <main className="flex min-h-screen flex-col items-center justify-between bg-slate-400"></main>
    </>
  );
}
