import AppDataSource from "../../data-source";

import { Properties } from "../../entities/properties.entity";

const listPropiertiesService = async () => {
  const propietiesRepository = AppDataSource.getRepository(Properties);

  const propietiesList = await propietiesRepository.find();

  return propietiesList;
};

export default listPropiertiesService;
