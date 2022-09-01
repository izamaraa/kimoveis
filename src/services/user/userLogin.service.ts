import AppDataSource from "../../data-source";
import { compare } from "bcryptjs";
import { IUserLogin } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors";

const userLoginService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email: email });
  console.log(email);
  console.log(user);
  if (!user) {
    throw new AppError(403, "invalid email or password");
  }
  if (user?.isActive === false) {
    throw new AppError(401, "user is not active");
  }
  const matchPassword = await compare(password, user.password);
  if (!matchPassword) {
    throw new AppError(403, "invalid email or password");
  }
  const token = jwt.sign({ isAdm: user.isAdm }, "SECRET_KEY", {
    subject: user.id,
    expiresIn: "2h",
  });
  return token;
};
export default userLoginService;
