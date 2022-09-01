import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors";

const listCategoryIdService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOne({
    where: { id: id },
    relations: { properties: true },
  });

  if (!category) {
    throw new AppError(404, "not found");
  }

  return category;
};
export default listCategoryIdService;
