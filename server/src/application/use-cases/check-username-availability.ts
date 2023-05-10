import userRepositoryInterface from "../../adaptors/repository/userRepositoryInterface";
import createError from "../../adaptors/services/utils/createError";
import getConfigs from "../../configs";
import User from "../../entities/user";

const config = getConfigs();

const caseCheckUserNameAvailability = async (
  userRepository: userRepositoryInterface,
  createError: createError,
  userNameToCheck: string
) => {
  if (!userNameToCheck) throw createError(400, "Username is required");
  if (typeof userNameToCheck !== "string") throw createError(400, "Username must be a string");
  if (!config.auth.userNameRejex.test(userNameToCheck)) throw createError(400, "Invalid username");

  let existingUserDataFromDb: User;
  try {
    existingUserDataFromDb = await userRepository.getUserDataWithUsername(userNameToCheck);
  } catch (error) {
    throw createError(500, "Error fetching user data");
  }

  if (!existingUserDataFromDb) return { status: config.actions.USERNAME_AVILABLE };
  return { status: config.actions.USERNAME_UNAVILABLE };
};

type caseCheckUserNameAvailability = typeof caseCheckUserNameAvailability;
export default caseCheckUserNameAvailability;
