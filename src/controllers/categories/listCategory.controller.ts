import { Request, Response } from "express";
import { AppError, handleError2 } from "../../errors";
import listCategoryService from "../../services/categories/listCategories.service";
import { ICategoryRequest } from "../../interfaces/categories";

const listCategoryController = async (req: Request, res: Response) => {
  try {
    const category: ICategoryRequest[] = await listCategoryService();
    return res.status(200).json(category);
  } catch (error) {
    if (error instanceof AppError) {
      handleError2(error, res);
    }
  }
};
export default listCategoryController;
