import { Response } from "express";
import caseUserSignUp from "../../application/use-cases/signup-user";
import { RequestWithUser } from "../../frameworks/webserver/express";
import userRepositoryInterface from "../repository/userRepositoryInterface";
import authServiceInterface from "../services/authServie";
import createError from "../services/utils/createError";
import caseUserLogin from "../../application/use-cases/login-user";
import caseCheckUserNameAvailability from "../../application/use-cases/check-username-availability";

const authControllerImpl = (userRepository: userRepositoryInterface, authService: authServiceInterface, createError: createError) => {
  //
  const postUserSignUp = async (req: RequestWithUser, res: Response) => {
    const { email, password, username } = req.body;
    const response = await caseUserSignUp(userRepository, authService, createError, {
      email,
      password,
      username,
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

  const getUserNameAvailability = async (req: RequestWithUser) => {
    const userName = req.params.id;
    const response = await caseCheckUserNameAvailability(userRepository, createError, userName);
    return response;
  };

  return {
    postUserSignUp,
    postUserLogin,
    getUserNameAvailability,
  };
};

type authControllerImpl = typeof authControllerImpl;
export default authControllerImpl;
