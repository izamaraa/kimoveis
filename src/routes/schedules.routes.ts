import { Router } from "express";

import createSchedulesController from "../controllers/schedules/createSchedules.controller";
import listSchedulesIdController from "../controllers/schedules/listSchedules.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import authTokenAdmMiddleware from "../middlewares/authTokenAdm.middleware";

const schedulesRoutes = Router();
schedulesRoutes.post(
  "/schedules",
  authTokenMiddleware,
  createSchedulesController
);
schedulesRoutes.get(
  "/schedules/properties/:id",
  authTokenMiddleware,
  authTokenAdmMiddleware,
  listSchedulesIdController
);
export default schedulesRoutes;
