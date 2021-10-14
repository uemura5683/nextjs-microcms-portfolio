module.exports = {
  env: {
    NU_API_KEY: process.env.NU_API_KEY,
    NU_POST_API_KEY: process.env.NU_POST_API_KEY,
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