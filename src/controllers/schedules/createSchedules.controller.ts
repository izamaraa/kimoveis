import { Request, Response } from "express";

import createSchedulesService from "../../services/schedules/createSchedules.service";

const createSchedulesController = async (req: Request, res: Response) => {
  const { date, hour, propertyId } = req.body;
  const userId = req.user.id;

  const schedules = await createSchedulesService({
    date,
    hour,
    propertyId,
    userId,
  });
  return res.status(201).json({ message: `${date}, ${hour}` });
};
export default createSchedulesController;
