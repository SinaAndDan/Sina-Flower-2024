import Detail from "../../components/DetailPage/Detail";

const DetailPage: React.FC<{ params: { productId: string } }> = ({
  params,
}) => {
  const productId = params.productId;
  return <Detail productId={productId} />;
};

export default DetailPage;
