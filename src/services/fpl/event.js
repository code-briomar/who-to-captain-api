import {fetchEntryEvent} from "fpl-api";

// Event that took place during a gameweek
// entryID - Event That happened
// eventID - Gameweek ID
export const event = async (entryID, eventID) =>{
    return fetchEntryEvent(entryID,eventID)
}