import { Response } from "express";
import caseUserSignUp from "../../application/use-cases/signup-user";
import { RequestWithUser } from "../../frameworks/webserver/express";
import userRepositoryInterface from "../repository/userRepositoryInterface";
import authServiceInterface from "../services/authServie";
import createError from "../services/utils/createError";
import caseUserLogin from "../../application/use-cases/login-user";

const authControllerImpl = (userRepository: userRepositoryInterface, authService: authServiceInterface, createError: createError) => {
  //
  const postUserSignUp = async (req: RequestWithUser, res: Response) => {
    const { email, password } = req.body;
    const response = await caseUserSignUp(userRepository, authService, createError, {
      email,
      password,
    });
    res.cookie("refreshToken", response.refreshToken);
    response.refreshToken = null;
    return response;
  };

  const postUserLogin = async (req: RequestWithUser, res: Response) => {
    const { email, password } = req.body;
    const response = await caseUserLogin(userRepository, authService, createError, {
      email,
      password,
    });
    res.cookie("refreshToken", response.refreshToken);
    response.refreshToken = null;
    return response;
  };

  return {
    postUserSignUp,
    postUserLogin,
  };
};

type authControllerImpl = typeof authControllerImpl;
export default authControllerImpl;
