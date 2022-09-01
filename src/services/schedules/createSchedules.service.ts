import AppDataSource from "../../data-source";

import { Schedules } from "../../entities/shedules.entity";
import { Properties } from "../../entities/properties.entity";
import { User } from "../../entities/user.entity";
import { IScheduleRequest } from "../../interfaces/schedules";
import { AppError } from "../../errors";
import verificaRegraDiaEHora from "../../teste";

const createSchedulesService = async ({
  userId,
  propertyId,
  date,
  hour,
}: IScheduleRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const propietiesRepository = AppDataSource.getRepository(Properties);

  const schedulesRepository = AppDataSource.getRepository(Schedules);

  const findUser = await userRepository.findOne({ where: { id: userId } });

  const findPropierties = await propietiesRepository.findOne({
    where: { id: propertyId },
  });

  if (!findUser || !findPropierties) {
    throw new AppError(404, "Not found");
  }

  verificaRegraDiaEHora(date, hour);

  const verificaData = await schedulesRepository.findOneBy({ date: date });
  const verificaHora = await schedulesRepository.findOneBy({ hour: hour });

  if (verificaData && verificaHora) {
    throw new AppError(400, "Agendamento nesse dia e horario ja existe");
  }

  const newSchedules = new Schedules();
  newSchedules.properties = findPropierties;
  newSchedules.user = findUser;
  newSchedules.date = date;
  newSchedules.hour = hour;
  schedulesRepository.create(newSchedules);
  await schedulesRepository.save(newSchedules);

  return newSchedules;
};

export default createSchedulesService;
