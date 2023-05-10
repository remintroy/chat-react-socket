import dotenv from "dotenv";
dotenv.config();

const getConfigs = () => {
  return {
    server: {
      name: "ChatApp Server",
      port: process.env.PORT || 5000,
      baseURl: "/",
      serverId: "1",
      authBaseUrl: "/auth",
      adminBaseUrl: "/blog/su",
    },
    jwt: {
      accessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
      accessOption: {
        expiresIn: "20m",
      },
      refreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
      refreshOption: {
        expiresIn: "365d",
      },
    },
    cors: {
      origin: ["*", "http://localhost:8081"],
      credentials: true,
    },
    auth: {
      minPasswordLength: 6,
      uidLength: 28,
      passwordSalt: 10,
      userNameRejex: /^[a-z0-9_]+$/,
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
    actions: {
      USERNAME_AVILABLE: "AVLB",
      USERNAME_UNAVILABLE: "UNAVLB",
    },
  };
};
export default getConfigs;
