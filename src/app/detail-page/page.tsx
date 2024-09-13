import { Suspense, lazy } from "react";
import SkeletonLoader from "../components/Layout/SkeletonLoader"; // Adjust the path

const ProductDetail = lazy(() => import("../components/DetailPage/Detail")); // Dynamically import the component

const DetailPage: React.FC = () => {
  return (
    <Suspense fallback={<SkeletonLoader />}>
      <ProductDetail />
    </Suspense>
  );
};

export default DetailPage;
//../components/Layout/SkeletonLoader
//../components/DetailPage/Detail
