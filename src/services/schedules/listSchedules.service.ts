import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

import { AppError } from "../../errors";

const listSchedulesService = async (id: string) => {
  const propertysRepository = AppDataSource.getRepository(Properties);
  const propertys = await propertysRepository.findOne({
    where: { id: id },
    relations: { schedules: true },
  });

  if (!propertys) {
    throw new AppError(404, "not found");
  }

  return propertys;
};
export default listSchedulesService;
