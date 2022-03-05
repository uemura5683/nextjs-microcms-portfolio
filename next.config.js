module.exports = {
  env: {
    NS_API_KEY: process.env.NS_API_KEY,
    NS_NEXT_PUBLIC_GA_ID: process.env.NS_NEXT_PUBLIC_GA_ID,
    NU_API_KEY: process.env.NU_API_KEY,
    NU_POST_API_KEY: process.env.NU_POST_API_KEY,
    NS_GRID_API_KEY: process.env.NS_GRID_API_KEY,
    NS_FROM: process.env.NS_FROM,
    CHAT_APP_API_KEY:process.env.CHAT_APP_API_KEY,
    CHAT_APP_AUTH_DOMAIN:process.env.CHAT_APP_AUTH_DOMAIN,
    CHAT_APP_PROJECT_ID:process.env.CHAT_APP_PROJECT_ID,
    CHAT_APP_STORAGE_BUCKET:process.env.CHAT_APP_STORAGE_BUCKET,
    CHAT_APP_MESSAGEING_SENDER_ID:process.env.CHAT_APP_MESSAGEING_SENDER_ID,
    CHAT_APP_APP_ID:process.env.CHAT_APP_APP_ID,
    SKILL:process.env.SKILL,
    PARAM:process.env.PARAM,
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