"use client";

import { useRouter } from "next/navigation";
import Detail from "../components/DetailPage/Detail";

const DetailPage: React.FC = () => {
  const router = useRouter();

  return <Detail />;
};

export default DetailPage;
