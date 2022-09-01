import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export function handleError(
  err: any,
  req: Request,
  res: Response,
  _: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "Error",
      code: err.statusCode,
      message: err.message,
    });
  }
  console.log(err);

  return res.status(500).json({
    status: "Error",
    code: 500,
    message: err.message,
  });
}
