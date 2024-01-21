import {getCurrentGameWeekEvents} from "../../utils/getCurrentGameWeekEvents.js";

export const captaincyHistory = async (playersData, managerID) => {
    // Return the most captained
    //Fetch current game week
    const data = await getCurrentGameWeekEvents(managerID);
    return data;
}