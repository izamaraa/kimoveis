import { Router } from "express";

import createPropiertiesController from "../controllers/propierties/createPropierties.controller";
import listPropiertiesController from "../controllers/propierties/listPropierties.controller";
import authTokenAdmMiddleware from "../middlewares/authTokenAdm.middleware";
import authTokenMiddleware from "../middlewares/authTokenAdm.middleware";

const propiertiesRouter = Router();

propiertiesRouter.post(
  "/properties",
  authTokenMiddleware,
  authTokenAdmMiddleware,
  createPropiertiesController
);
propiertiesRouter.get("/properties", listPropiertiesController);
export default propiertiesRouter;
