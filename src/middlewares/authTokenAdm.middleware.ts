import { NextFunction, Request, Response } from "express";

async function authTokenAdmMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.user.isAdm) {
    return res.status(403).json({ message: "user is not adm" });
  }

  next();
}

export default authTokenAdmMiddleware;
