// components/SkeletonLoader.tsx
"use client"; // Ensures this is a Client Component

const SkeletonLoader: React.FC = () => (
  <div className="space-y-4">
    <div className="animate-pulse">
      <div className="h-40 bg-gray-200 rounded-lg"></div>
      <div className="h-4 bg-gray-200 rounded mt-2"></div>
      <div className="h-4 bg-gray-200 rounded mt-2"></div>
    </div>
  </div>
);

export default SkeletonLoader;
