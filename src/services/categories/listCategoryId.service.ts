import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors";

const listCategoryIdService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  // const propertiesRepository = AppDataSource.getRepository(Properties);

  const category = await categoryRepository.findOne({
    where: { id: id },
    relations: { properties: true },
  });

  if (!category) {
    throw new AppError(404, "not found");
  }
  // const propierties = await propertiesRepository.find({
  //   where: { category: category },
  // });
  // if (!propierties) {
  //   throw new AppError(404, "properties not found");
  // }
  // // const categoria = { ...category, properties: propierties };
  return category;
};
export default listCategoryIdService;
