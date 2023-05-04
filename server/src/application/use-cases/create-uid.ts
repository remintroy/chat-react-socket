import userRepositoryInterface from "../../adaptors/repository/userRepositoryInterface";
import authServiceInterface from "../../adaptors/services/authServie";
import createError from "../../adaptors/services/utils/createError";
import User from "../../entities/user";

const caseCreateUid = async (
  userRepository: userRepositoryInterface,
  authService: authServiceInterface,
  createError: createError
) => {
  let existingData: User;
  let newUid: string;

  do {
    // creates new userId
    newUid = authService.createRandomUid();
    // checks if user with this uid already exists
    existingData = await userRepository.getUserDataWithUid(newUid);
    // retry until gets new uid
  } while (existingData);

  return newUid;
};

type caseCreateUid = typeof caseCreateUid;
export default caseCreateUid;
