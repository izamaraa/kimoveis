// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import "dotenv/config";
// import { AppError } from "../errors";

// const authTokenAdmMiddleware = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   let token = req.headers.authorization;

//   if (!token) {
//     throw new AppError(401, "Missing token");
//   }
//   token = token.split(" ")[1];

//   jwt.verify(
//     token,
//     process.env.SECRET_KEY as string,
//     (error: any, decoded: any) => {
//       if (error) {
//         throw new AppError(401, "Invalid token");
//       }
//       // req.user = {
//       //   isAdm: decoded.isAdm,
//       //   id: decoded.sub,
//       // };
//       if (!decoded.isAdm) {
//         throw new AppError(403, "Missing adm permission");
//       }
//       next();
//     }
//   );
// };

// export default authTokenAdmMiddleware;
import { NextFunction, Request, Response } from "express";
// import { AppError } from "../errors";
import jwt from "jsonwebtoken";
// import AppDataSource from "../data-source";
// import { User } from "../entities/user.entity";

async function authTokenAdmMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.user.isAdm) {
    return res.status(403).json({ message: "user is not adm" });
  }

  console.log("teste");
  next();
}

export default authTokenAdmMiddleware;
