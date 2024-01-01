import {fetchEntryEvent} from "fpl-api";

// Event that took place during a gameweek
// managerID - ID of Manager
// eventID - Gameweek ID
export const event = async (managerID, eventID) =>{
    return fetchEntryEvent(managerID,eventID)
}