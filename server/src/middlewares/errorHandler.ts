import { errorResponse } from "../utils/responses.js";
import type { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  // Handle all types of error here

  errorResponse(res, statusCode, message);
};
