import { ICar } from "./ICar";

export interface ISchedulesByuser {
  user_id: number;
  car: ICar;
  startDate: string;
  endDate: string;
  id?: number;
}