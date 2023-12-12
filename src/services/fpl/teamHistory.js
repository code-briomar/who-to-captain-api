import {fetchEntryHistory} from "fpl-api";

// Get Team history - Transfers, etc.
export const teamHistory = async (teamID) =>{
    return fetchEntryHistory(teamID)
}