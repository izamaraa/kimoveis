import { IUserRequest } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { hash } from "bcrypt";
import { AppError } from "../../errors";

const createUserService = async ({
  name,
  email,
  isAdm,
  password,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  if (!password) {
    throw new Error("Password is a required field");
  }

  const usuario = userRepository.find();

  const usuarioJaExiste = (await usuario).find((user) => user.email === email);

  if (usuarioJaExiste) {
    throw new AppError(400, "USUARIO JA EXISTE");
  }
  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    isAdm,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return user;
};
export default createUserService;
