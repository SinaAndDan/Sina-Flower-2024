"use client";

import { useEffect, useState } from "react";
import Detail from "../../components/DetailPage/Detail";
import { fetchProductsAbout } from "lib/api";
import { getWikipediaSummary } from "lib/wikipedia";
import Loading from "src/app/components/Layout/Loading";

const DetailPage = ({ params }: { params: { productId: string } }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [about, setAbout] = useState<any>(null);
  const [summaries, setSummaries] = useState<{
    english: string;
    persian: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Fetch about data
        const aboutData = await fetchProductsAbout(params.productId);

        // Determine English and Persian names
        const englishName = aboutData.name_en.includes(" ")
          ? aboutData.name_en.split(" ")[0]
          : aboutData.name_en;
        const persianName = aboutData.name_pe.includes(" ")
          ? aboutData.name_pe.split(" ")[0]
          : aboutData.name_pe;

        // Fetch summaries from Wikipedia
        const wikiSummaries = await getWikipediaSummary(
          englishName,
          persianName
        );

        // Update state with fetched data
        setAbout(aboutData);
        setSummaries(wikiSummaries);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.productId]);

  // Show the loading component while data is loading
  if (isLoading) {
    return <Loading />;
  }

  // Render the Detail component once data is ready
  return (
    <Detail
      productId={params.productId}
      englishSummary={summaries?.english || ""}
      persianSummary={summaries?.persian || ""}
    />
  );
};

export default DetailPage;
