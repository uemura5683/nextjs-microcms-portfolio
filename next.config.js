module.exports = {
  env: {
    NS_API_KEY: process.env.NS_API_KEY,
    NS_NEXT_PUBLIC_GA_ID: process.env.NS_NEXT_PUBLIC_GA_ID,
    NU_API_KEY: process.env.NU_API_KEY,
    NU_POST_API_KEY: process.env.NU_POST_API_KEY,
    NS_GRID_API_KEY: process.env.NS_GRID_API_KEY,
    NS_FROM: process.env.NS_FROM,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      };
    }
    return config;
  }
};