import {fetchLive} from "fpl-api";

//Live data for a gameweek
export const liveGameweek = async (gameWeekID) =>{
    return fetchLive(gameWeekID);
}