"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Detail from "../../../../components/DetailPage/Detail";
import { fetchProductsAbout } from "lib/api";
import { getWikipediaSummary } from "lib/wikipedia";
import Loading from "components/Layout/Loading";

const DetailPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [summaries, setSummaries] = useState<{
    english: string;
    persian: string;
  } | null>(null);

  useEffect(() => {
    if (!productId) return; // ✅ Ensure productId is available before fetching

    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Fetch about data
        const aboutData = await fetchProductsAbout(productId as string); // ✅ Convert to string

        // Determine English and Persian names
        const englishName = aboutData.name_en.includes(" ") ? aboutData.name_en.split(" ")[0] : aboutData.name_en;
        const persianName = aboutData.name_pe.includes(" ") ? aboutData.name_pe.split(" ")[0] : aboutData.name_pe;

        // Fetch summaries from Wikipedia
        const wikiSummaries = await getWikipediaSummary(englishName, persianName);

        setSummaries(wikiSummaries);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [productId]); // ✅ Add productId as a dependency

  // Show the loading component while data is loading
  if (isLoading) {
    return <Loading />;
  }

  // Render the Detail component once data is ready
  return (
    <Detail
      productId={typeof productId === "string" ? productId : ""} // ✅ Ensure it's always a string
      englishSummary={summaries?.english || ""}
      persianSummary={summaries?.persian || ""}
    />

  );
};

export default DetailPage;
