/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
