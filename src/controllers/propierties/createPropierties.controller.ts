import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import createPropiertiesService from "../../services/propierties/createPropierties.service";

const createPropiertiesController = async (req: Request, res: Response) => {
  const { value, size, address, categoryId }: IPropertyRequest = req.body;
  const propierty = await createPropiertiesService({
    value,
    size,
    address,
    categoryId,
  });
  return res.status(201).json(propierty);
};
export default createPropiertiesController;
