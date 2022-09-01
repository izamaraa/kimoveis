import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
// import { AppError } from "../errors";
// import { User } from "../entities/user.entity";
const authTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  // console.log(token);
  if (!token) {
    return res.status(401).json({ message: "token not found" });
  }

  const splitToken = token.split(" ");
  // console.log(splitToken);
  jwt.verify(splitToken[1], "SECRET_KEY", (error: any, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
    // req.user = {
    //   isAdm: decoded.isAdm,
    //   id: decoded.id,
    // };
    // req.user.userId = decoded.sub;

    req.user["isAdm"] = decoded.isAdm;
    req.user["id"] = decoded.id;

    next();
  });
};

export default authTokenMiddleware;
