import { Request, Response } from "express";
import { AppError } from "../../errors";
import listPropiertiesService from "../../services/propierties/listPropierties.service";
import { IPropertyRequest } from "../../interfaces/properties";

const listPropiertiesController = async (req: Request, res: Response) => {
  const propertieslist = await listPropiertiesService();

  return res.json(propertieslist);
};
export default listPropiertiesController;
