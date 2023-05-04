import { Request, Response } from "express";

function makeExpressResponseCallback(controller) {
  return async (req: Request, res: Response) => {
    try {
      const response = await controller(req, res);
      res.send(response);
    } catch (error) {
      res.status(error?.code ? error.code : 500);
      res.send(error);
    }
  };
}

type makeExpressResponseCallback = typeof makeExpressResponseCallback;
export default makeExpressResponseCallback;
