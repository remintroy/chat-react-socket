import userRepositoryInterface from "../../adaptors/repository/userRepositoryInterface";
import createError from "../../adaptors/services/utils/createError";

interface RequestData {
  page: number;
  query: string;
}

const caseSearchUserList = (userRepository: userRepositoryInterface, createError: createError, data: RequestData) => {
  //
};

type caseSearchUserList = typeof caseSearchUserList;
export default caseSearchUserList;
