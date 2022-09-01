import { ICategoryRequest } from "../../interfaces/categories";
import { Request, Response } from "express";
import listCategoryIdService from "../../services/categories/listCategoryId.service";
import { AppError, handleError2 } from "../../errors";
const listcategoryIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const categoryList = await listCategoryIdService(id);
    return res.status(200).json(categoryList);
  } catch (error) {
    if (error instanceof AppError) {
      handleError2(error, res);
    }
  }
};

export default listcategoryIdController;
