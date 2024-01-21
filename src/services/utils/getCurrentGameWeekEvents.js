import {currentGameWeekStatus} from "../fpl/currentGameWeekStatus.js";
import {event} from "../fpl/event.js";

export const getCurrentGameWeekEvents = async (managerID) => {
    //Fetch current game week
    const GameweekResponse = await currentGameWeekStatus();
    const currentGameweek = GameweekResponse.status[0].event;
    return await event(managerID, currentGameweek);
}