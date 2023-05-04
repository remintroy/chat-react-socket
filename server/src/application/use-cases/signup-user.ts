import userRepositoryInterface from "../../adaptors/repository/userRepositoryInterface";
import authServiceInterface from "../../adaptors/services/authServie";
import createError from "../../adaptors/services/utils/createError";
import User from "../../entities/user";

interface InputData {
  email: string;
  password: string;
}

const caseUserSignUp = async (
  userRepository: userRepositoryInterface,
  authService: authServiceInterface,
  createError: createError,
  data: InputData
) => {
  if (!data.email) throw createError(400, "Email is required");
  if (!data.password) throw createError(400, "Password is required");

  data.email = authService.validator.validateEmail(data.email);
  data.password = authService.validator.validatePassword(data.password);

  let existingUserDataFromDb: User;
  try {
    existingUserDataFromDb = await userRepository.getUserDataWithEmail(data.email);
  } catch (error) {
    throw createError(500, "Faild to fetch user data");
  }

  if (existingUserDataFromDb) throw createError(400, "User already exists with this email");

  // creating password hash
  const hashedPassword = await authService.createPasswordHash(data.password);
  const uid = await authService.createRandomUid();

  let newUserData: User;
  try {
    newUserData = await userRepository.addNewUser({ uid, email: data.email, password: hashedPassword });
  } catch (error) {
    throw createError(500, "Faild to create account");
  }

  // creates tokens
  const { accessToken, refreshToken } = authService.jwt.createTokens(uid);

  return {
    accessToken,
    refreshToken,
    uid: newUserData.uid,
    name: newUserData.name,
    friends: newUserData.friends,
  };
};

type caseUserSignUp = typeof caseUserSignUp;
export default caseUserSignUp;
