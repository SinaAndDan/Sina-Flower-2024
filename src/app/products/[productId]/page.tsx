import Detail from "../../components/DetailPage/Detail";

const DetailPage: React.FC<{ params: { productId: number } }> = ({
  params,
}) => {
  const productId = params.productId;
  return <Detail product={Number(productId)} />;
};

export default DetailPage;
