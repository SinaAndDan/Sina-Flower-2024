import Detail from "../../components/DetailPage/Detail";
import { flowerData } from "@/data/flowerdata";

const DetailPage: React.FC<{ params: { productId: number } }> = ({
  params,
}) => {
  return <Detail product={params.productId} />;
};

export default DetailPage;
