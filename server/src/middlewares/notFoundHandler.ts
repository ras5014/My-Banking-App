import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/responses";

export const notFound = (req: Request, res: Response) => {
  return errorResponse(res, 404, "Not Found");
};
