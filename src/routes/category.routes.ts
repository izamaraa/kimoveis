import { Router } from "express";

import createCategoryController from "../controllers/categories/createCategory.controller";

import listCategoryController from "../controllers/categories/listCategory.controller";
import listcategoryIdController from "../controllers/categories/listCategoryId.controller";
import authTokenAdmMiddleware from "../middlewares/authTokenAdm.middleware";
import authTokenMiddleware from "../middlewares/authToken.middleware";
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
