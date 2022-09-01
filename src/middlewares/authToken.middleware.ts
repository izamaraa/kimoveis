import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const authTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "token not found" });
  }

  const splitToken = token.split(" ");

  jwt.verify(splitToken[1], "SECRET_KEY", (error: any, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
    req.user = {
      isAdm: decoded.isAdm,
      id: decoded.sub,
    };

    next();
  });
};

export default authTokenMiddleware;
