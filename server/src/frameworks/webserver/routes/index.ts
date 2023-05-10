import ExpressApp, { Express } from "express";
import getConfigs from "../../../configs";
import authRouter from "./auth";
import notFoundError from "../middlewares/notFoundError";
import errorHandlingMiddlware from "../middlewares/errorHandlingMiddleware";

export default function routes(app: Express, express: typeof ExpressApp, configs: typeof getConfigs) {
  const config = configs();

  app.use(`${config.server.authBaseUrl}/api/v1`, authRouter(express));

  app.all("*", notFoundError);
  app.use(errorHandlingMiddlware);
}
