import { ICategoryRequest } from "../../interfaces/categories";
import { Category } from "../../entities/categories.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";

const createcategoryService = async ({ name }: ICategoryRequest) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categoryAlreadyExists = await categoryRepository.findOne({
    where: { name },
  });

  if (categoryAlreadyExists) {
    throw new AppError(400, "category already registered");
  }
  const category = new Category();
  category.name = name;

  categoryRepository.create(category);
  await categoryRepository.save(category);
  return category;
};
export default createcategoryService;
