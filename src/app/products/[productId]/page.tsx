import { fetchProductsAbout } from "lib/api";
import Detail from "../../components/DetailPage/Detail";
import { getWikipediaSummary } from "lib/wikipedia";

const DetailPage = async ({ params }: { params: { productId: string } }) => {
  const about = await fetchProductsAbout(params.productId);

  const englishName = about.name_en.includes(" ")
    ? about.name_en.split(" ")[0]
    : about.name_en;
  const persianName = about.name_pe.includes(" ")
    ? about.name_pe.split(" ")[0]
    : about.name_pe;

  const { english, persian } = await getWikipediaSummary(
    englishName,
    persianName
  );

  return (
    <Detail
      productId={params.productId}
      englishSummary={english}
      persianSummary={persian}
    />
  );
};

export default DetailPage;
