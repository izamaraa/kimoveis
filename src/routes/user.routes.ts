import { Router } from "express";
import userDeleteController, {
  createUserController,
  userListController,
  userLoginController,
} from "../controllers/users/users.controller";
import authTokenAdmMiddleware from "../middlewares/authTokenAdm.middleware";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const userRoutes = Router();

userRoutes.post("/users", createUserController);
userRoutes.get(
  "/users",
  authTokenMiddleware,
  authTokenAdmMiddleware,
  userListController
);
userRoutes.post("/login", userLoginController);
userRoutes.delete(
  "/users/:id",
  authTokenMiddleware,
  authTokenAdmMiddleware,
  userDeleteController
);
export default userRoutes;
