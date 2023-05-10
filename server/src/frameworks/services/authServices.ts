import randomId from "random-id";
import getConfigs from "../../configs";
import bcrypt from "bcryptjs";
import jsonWebToken from "jsonwebtoken";

const authServiceImpl = () => {
  // Helper funtions with main logic
  const config = getConfigs();
  const _createJwtAccessToken = (uid: string) => jsonWebToken.sign({ uid }, config.jwt.accessSecret, config.jwt.accessOption);
  const _createJwtRefreshToken = (uid: string) => jsonWebToken.sign({ uid }, config.jwt.refreshSecret, config.jwt.refreshOption);
  const _verifyJwtAccessToken = (accessToken: string) => jsonWebToken.verify(accessToken, config.jwt.accessSecret);
  const _verifyJwtRefreshToken = (refreshToken: string) => jsonWebToken.verify(refreshToken, config.jwt.refreshSecret);
  const _randomUid = () => randomId(config.auth.uidLength, "A0");
  const _validateEmail = (email: string) => {
    if (typeof email !== "string") throw "Email must be a string";
    return email.trim().toLowerCase();
  };
  const _validatePassword = (password: string) => {
    if (typeof password !== "string") throw "Password must be a string";
    if (password.length < config.auth.minPasswordLength) throw `Password must be at least ${config.auth.minPasswordLength} chars`;
    return password.trim();
  };
  const _validateUsername = (username: string) => {
    if (typeof username !== "string") throw "Username must be a string";
    username = username.trim().toLowerCase();
    if (!config.auth.userNameRejex.test(username)) throw "Invalid username";
    return username;
  };

  // Implimentation funtions
  const createRandomUid = () => _randomUid();
  const createPasswordHash = (password: string) => bcrypt.hash(password, config.auth.passwordSalt);
  const isPasswordMatchWithHash = (password: string, hash: string) => bcrypt.compare(password, hash);

  const validator = {
    validatePassword: _validatePassword,
    validateEmail: _validateEmail,
    validateUsername: _validateUsername,
  };

  const jwt = {
    createAccessToken: (uid: string) => _createJwtAccessToken(uid),
    createRefreshToken: (uid: string) => _createJwtRefreshToken(uid),
    createTokens: (uid: string) => {
      return {
        accessToken: _createJwtAccessToken(uid),
        refreshToken: _createJwtRefreshToken(uid),
      };
    },
    createAccessTokenFromRefreshToken: (refreshToken: string) => {
      const { uid }: any = _verifyJwtRefreshToken(refreshToken);
      return jsonWebToken.sign({ uid }, config.jwt.accessSecret, config.jwt.accessOption);
    },
    verifyAccessToken: (accessToken: string) => _verifyJwtAccessToken(accessToken),
    verifyRefreshToken: (refreshToken: string) => _verifyJwtRefreshToken(refreshToken),
  };

  return {
    createRandomUid,
    createPasswordHash,
    isPasswordMatchWithHash,
    validator,
    jwt,
  };
};

type authServiceImpl = ReturnType<typeof authServiceImpl>;
export default authServiceImpl;
