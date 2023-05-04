import dotenv from "dotenv";
dotenv.config();

const getConfigs = () => {
  return {
    server: {
      name: "ChatApp Server",
      port: process.env.PORT || 5000,
      baseURl: "/",
      serverId: "1",
      appBaseUrl: "/blog",
      adminBaseUrl: "/blog/su",
    },
    jwt: {
      accessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
      accessOption: {
        expiresIn: "20m",
      },
      refreshSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
      refreshOption: {
        expiresIn: "365d",
      },
    },
    cors: {
      origin: ["*", "https://dynotxt.com", "https://admin.dynotxt.com"],
      credentials: true,
    },
    auth: {
      minPasswordLength: 6,
      uidLength: 28,
      passwordSalt: 225,
    },
    mongo: {
      url: process.env.MONGODB_URL,
      reconnectInterval: 10000,
      autoReconnect: true,
      db: process.env.MONGODB_NAME,
      options: {
        autoIndex: false,
        useNewUrlParser: true,
        connectTimeoutMS: 1000,
      },
    },
    actions: {},
  };
};
export default getConfigs;
