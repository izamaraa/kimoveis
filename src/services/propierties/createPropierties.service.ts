import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Address } from "../../entities/addresses.entity";
import { IPropertyRequest } from "../../interfaces/properties";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors";

const createPropiertiesService = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest): Promise<Properties> => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const addressesRepository = AppDataSource.getRepository(Address);
  const categoryRepository = AppDataSource.getRepository(Category);

  const categoryExists = await categoryRepository.findOneBy({
    id: categoryId,
  });

  if (!categoryExists) {
    throw new AppError(404, "category not found");
  }
  const zipCodeExists = await addressesRepository.findOneBy({
    zipCode: address.zipCode,
  });
  if (zipCodeExists) {
    throw new AppError(400, "zipCode already exists");
  }
  if (address.zipCode.length > 8) {
    throw new AppError(400, "invalid zipCode");
  }

  if (address.state.length !== 2) {
    throw new AppError(400, "invalid state");
  }

  const novoEnderco = addressesRepository.create({
    district: address.district,
    zipCode: address.zipCode,
    number: address.number,
    city: address.city,
    state: address.state,
  });
  const ExistingAddress = await addressesRepository.findOne({
    where: {
      district: address.district,
      zipCode: address.zipCode,
      number: address.number,
      city: address.city,
      state: address.state,
    },
  });
  if (ExistingAddress) {
    throw new AppError(400, "addresses is already exists");
  }
  await addressesRepository.save(novoEnderco);

  const propierty = propertiesRepository.create({
    value,
    size,
    address: novoEnderco,
    category: categoryExists,
  });
  await propertiesRepository.save(propierty);
  return propierty;
};
export default createPropiertiesService;
