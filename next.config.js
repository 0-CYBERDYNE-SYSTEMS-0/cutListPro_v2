module.exports = {
  reactStrictMode: true,
  env: {
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
    HOME_DEPOT_API_KEY: process.env.HOME_DEPOT_API_KEY,
    DALLE_API_KEY: process.env.DALLE_API_KEY,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};