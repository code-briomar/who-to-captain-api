import {currentGameWeekStatus} from "./fpl/currentGameWeekStatus.js";

export const fetchCurrentGameweek = async () => {
  const response = await currentGameWeekStatus();
  const data = await response;
  return data;
}