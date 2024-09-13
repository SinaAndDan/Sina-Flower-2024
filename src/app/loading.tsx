// app/loading.tsx
import LoadingSpinner from "./components/Layout/LoadingSpinner"; // Adjust the import path

const Loading: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <LoadingSpinner />
  </div>
);

export default Loading;
