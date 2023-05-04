import ExpressApp from "express";
import userRepositoryInterface from "../../../adaptors/repository/userRepositoryInterface";
import userReopsitoryImpl from "../../mongodb/repository/userRepositoryImpl";
import authServiceInterface from "../../../adaptors/services/authServie";
import authServiceImpl from "../../services/authServices";
import createError from "../../../adaptors/services/utils/createError";
import authControllerImpl from "../../../adaptors/controller/auth";
import makeExpressResponseCallback from "../callbacks/createExpressCallback";

export default function authRouter(express: typeof ExpressApp) {
  const router = express.Router();

  const userRepository = userRepositoryInterface(userReopsitoryImpl());
  const authService = authServiceInterface(authServiceImpl());

  const authController = authControllerImpl(userRepository, authService, createError);

  router.route("/login").post(makeExpressResponseCallback(authController.postUserLogin));
  router.route("/signup").post(makeExpressResponseCallback(authController.postUserSignUp));

  return router;
}
