import authServiceImpl from "../../frameworks/services/authServices";

const authServiceInterface = (service: authServiceImpl) => {
  const createRandomUid = () => service.createRandomUid();
  const createPasswordHash = (password: string) => service.createPasswordHash(password);
  const isPasswordMatchWithHash = (password: string, hash: string) => service.isPasswordMatchWithHash(password, hash);
  const validator = service.validator;
  const jwt = service.jwt;

  return {
    createRandomUid,
    createPasswordHash,
    isPasswordMatchWithHash,
    validator,
    jwt,
  };
};

type authServiceInterface = ReturnType<typeof authServiceInterface>;
export default authServiceInterface;
