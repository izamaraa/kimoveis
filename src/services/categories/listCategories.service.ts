import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";

const listCategoryService = async () => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categoryList = await categoryRepository.find();
  return categoryList;
};
export default listCategoryService;
