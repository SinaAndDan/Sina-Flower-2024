// next.config.mjs
export default {
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
