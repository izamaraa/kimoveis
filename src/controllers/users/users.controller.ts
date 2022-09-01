import { Request, Response } from "express";
import { IUserLogin, IUserRequest } from "../../interfaces/users";
import createUserService from "../../services/user/createUser.service";
import listUserService from "../../services/user/listUser.service";
import userLoginService from "../../services/user/userLogin.service";
import { instanceToPlain } from "class-transformer";
import userDeleteService from "../../services/user/userDelete.service";
import { AppError, handleError2 } from "../../errors";

const createUserController = async (req: Request, res: Response) => {
  // try {
  const { email, isAdm, name, password }: IUserRequest = req.body;
  const user = await createUserService({ email, isAdm, name, password });
  return res.status(201).json(instanceToPlain(user));
  // } catch (error) {
  //   if (error instanceof AppError) {
  //     handleError2(error, res);
  //   }
  // }
};

const userListController = async (req: Request, res: Response) => {
  // try {
  const users = await listUserService();
  return res.json(instanceToPlain(users));
  // } catch (error) {
  //   if (error instanceof AppError) {
  //     handleError2(error, res);
  //   }
  // }
};

const userLoginController = async (req: Request, res: Response) => {
  // try {
  const { email, password }: IUserLogin = req.body;
  const token = await userLoginService({ email, password });
  return res.json({ token: token });
  // } catch (error) {
  //   if (error instanceof AppError) {
  //     handleError2(error, res);
  //   }
  // }
};

const userDeleteController = async (req: Request, res: Response) => {
  // try {
  const id = req.params.id;

  const user = await userDeleteService(id);

  return res.status(204).json({ message: user });
  // } catch (error) {
  //   if (error instanceof AppError) {
  //     handleError2(error, res);
  //   }
  // }
};
export default userDeleteController;

export {
  createUserController,
  userListController,
  userLoginController,
  userDeleteController,
};
