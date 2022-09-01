import { Request, Response } from "express";
import { AppError, handleError2 } from "../../errors";
import { ICategoryRequest } from "../../interfaces/categories";
import createcategoryService from "../../services/categories/createCategories.service";

const createCategoryController = async (req: Request, res: Response) => {
  try {
    const categoryBody = req.body;
    console.log(req.headers.authorization);
    const category: ICategoryRequest = await createcategoryService(
      categoryBody
    );
    return res.status(201).json(category);
  } catch (error) {
    if (error instanceof AppError) {
      handleError2(error, res);
    }
  }
};
export default createCategoryController;
