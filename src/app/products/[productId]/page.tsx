import Detail from "../../components/DetailPage/Detail";
import { flowerData } from "@/data/flowerdata";

const DetailPage: React.FC<{ params: { productId: string } }> = ({
  params,
}) => {
  const productId = params.productId;
  return <Detail productId={productId} />;
};

export default DetailPage;
