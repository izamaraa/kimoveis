import { Request, Response } from "express";

import listPropiertiesService from "../../services/propierties/listPropierties.service";

const listPropiertiesController = async (req: Request, res: Response) => {
  const propertieslist = await listPropiertiesService();

  return res.json(propertieslist);
};
export default listPropiertiesController;
