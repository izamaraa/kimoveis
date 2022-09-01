import { Router } from "express";

import createCategoryController from "../controllers/categories/createCategory.controller";
import authTokenMiddleware from "../middlewares/authTokenAdm.middleware";
import listCategoryController from "../controllers/categories/listCategory.controller";
import listcategoryIdController from "../controllers/categories/listCategoryId.controller";
import authTokenAdmMiddleware from "../middlewares/authTokenAdm.middleware";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "/categories",
  authTokenMiddleware,
  authTokenAdmMiddleware,
  createCategoryController
);
categoriesRoutes.get("/categories", listCategoryController);
categoriesRoutes.get(
  "/categories/:id/properties",

  listcategoryIdController
);
export default categoriesRoutes;
