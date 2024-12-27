import withPWA from 'next-pwa';

// Use `withPWA` to wrap the Next.js configuration
const nextConfig = withPWA({
  dest: 'public', // Output directory for PWA assets
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  register: true, // Automatically registers the service worker
  skipWaiting: true, // Automatically activates new service worker versions
});

// Merge with your existing configuration
export default {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pzklfvvaewxtifmailez.supabase.co", // Your Supabase project domain
        port: "", // No port needed since it's https
        pathname: "/storage/v1/object/public/plant-images/**", // Path to your images in Supabase Storage
      },
    ],
  },
};
