import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";

const userDeleteService = async (id: string): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.findOneBy({ id: id });
  console.log(users);
  if (!users) {
    throw new AppError(404, "User not found");
  }
  if (!users.isActive) {
    throw new AppError(400, "User is not active");
  }
  // await userRepository.update(id, { isActive: true });
  users.isActive = false;
  await userRepository.save(users);
  return "usuario deletado";
};
// const users = await userRepository.find();
// const userDeleted = users.find((user) => user.id === id);
// if (!userDeleted) {
//   throw new AppError(404, "User not found");
// }
// if (userDeleted.isActive === false) {
//   throw new AppError(400, "User is not active");
// }
// userDeleted.isActive = false;
// await userRepository.save(userDeleted);
// return "usuario deletado";
//};
export default userDeleteService;
