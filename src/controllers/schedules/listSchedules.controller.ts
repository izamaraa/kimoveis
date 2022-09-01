import { Request, Response } from "express";
import listSchedulesService from "../../services/schedules/listSchedules.service";
import { AppError, handleError2 } from "../../errors";
const listSchedulesIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const categoryList = await listSchedulesService(id);
    return res.status(200).json(categoryList);
  } catch (error) {
    if (error instanceof AppError) {
      handleError2(error, res);
    }
  }
};

export default listSchedulesIdController;
