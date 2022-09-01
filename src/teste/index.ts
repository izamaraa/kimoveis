import { AppError } from "../errors";

const verificaRegraDiaEHora = (date: string, hour: string) => {
  const verificaDiaEHora = new Date(`${date} ${hour}`).toString();

  if (verificaDiaEHora.includes("Sat") || verificaDiaEHora.includes("Sun")) {
    throw new AppError(400, "Data é Invalida para agendamentos");
  }
  if (
    verificaDiaEHora.split(" ")[4] < "08:00:00" ||
    verificaDiaEHora.split(" ")[4] > "18:00:00"
  ) {
    throw new AppError(400, "Hora é invalida para agendamentos");
  }
};
export default verificaRegraDiaEHora;
