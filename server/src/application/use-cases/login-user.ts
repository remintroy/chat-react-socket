import userRepositoryInterface from "../../adaptors/repository/userRepositoryInterface";
import authServiceInterface from "../../adaptors/services/authServie";
import createError from "../../adaptors/services/utils/createError";
import User from "../../entities/user";

interface InputData {
  email: string;
  password: string;
}

const caseUserLogin = async (
  userRepository: userRepositoryInterface,
  authService: authServiceInterface,
  createError: createError,
  data: InputData
) => {
  if (!data.email) throw createError(400, "Email is required");
  if (!data.password) throw createError(400, "Password is required");

  try {
    data.email = authService.validator.validateEmail(data.email);
    data.password = authService.validator.validatePassword(data.password);
  } catch (error) {
    throw createError(400, error);
  }

  let existingUserDataFromDb: User;
  try {
    existingUserDataFromDb = await userRepository.getUserDataWithEmail(data.email);
  } catch (error) {
    throw createError(500, "Faild to fetch user data");
  }

  if (!existingUserDataFromDb) throw createError(400, "User with this email not exist");

  const passwordMatched = authService.isPasswordMatchWithHash(data.password, existingUserDataFromDb.password);

  if (!passwordMatched) throw createError(400, "Incorrect password");

  // Create JWT token with uid
  const { accessToken, refreshToken } = authService.jwt.createTokens(existingUserDataFromDb.uid);

  return {
    accessToken,
    refreshToken,
    name: existingUserDataFromDb.name,
    uid: existingUserDataFromDb.uid,
    friends: existingUserDataFromDb.friends,
  };
};

type caseUserLogin = typeof caseUserLogin;
export default caseUserLogin;
