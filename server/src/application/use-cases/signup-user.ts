import userRepositoryInterface from "../../adaptors/repository/userRepositoryInterface";
import authServiceInterface from "../../adaptors/services/authServie";
import createError from "../../adaptors/services/utils/createError";
import User from "../../entities/user";
import caseCreateUid from "./create-uid";

interface InputData {
  email: string;
  password: string;
  username: string;
}

const caseUserSignUp = async (
  userRepository: userRepositoryInterface,
  authService: authServiceInterface,
  createError: createError,
  data: InputData
) => {
  if (!data.email) throw createError(400, "Email is required");
  if (!data.password) throw createError(400, "Password is required");
  if (!data.username) throw createError(400, "Username is required");

  data.email = authService.validator.validateEmail(data.email);
  data.password = authService.validator.validatePassword(data.password);
  data.username = authService.validator.validateUsername(data.username);

  let existingUserDataFromDb: User;
  try {
    existingUserDataFromDb = await userRepository.getUserDataWithEmail(data.username);
  } catch (error) {
    throw createError(500, "Faild to fetch user data");
  }

  if (existingUserDataFromDb) throw createError(400, "Account already exists with this username");

  // creating password hash
  const hashedPassword = await authService.createPasswordHash(data.password);
  const uid = await caseCreateUid(userRepository, authService, createError);

  let newUserData: User;
  try {
    newUserData = await userRepository.addNewUser({ uid, email: data.email, password: hashedPassword, username: data.username });
  } catch (error) {
    throw createError(500, "Faild to create account");
  }

  // creates tokens
  const { accessToken, refreshToken } = authService.jwt.createTokens(uid);

  return {
    accessToken,
    refreshToken,
    uid: newUserData.uid,
    username: newUserData.username,
    friends: newUserData.friends,
  };
};

type caseUserSignUp = typeof caseUserSignUp;
export default caseUserSignUp;
