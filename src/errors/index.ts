import { Response } from "express";

export class AppError extends Error {
  statusCode;
  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
export const handleError2 = (err: AppError, res: Response) => {
  if (err instanceof AppError) {
    const { statusCode, message } = err;
    return res.status(statusCode).json({
      status: "error",
      statusCode,
      message,
    });
  }
  console.log(err);
};
