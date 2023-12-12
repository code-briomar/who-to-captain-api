import {fetchEntry} from "fpl-api";

// Fetch data for a team
export const getTeam = async (teamID) =>{
    return fetchEntry(teamID)
}