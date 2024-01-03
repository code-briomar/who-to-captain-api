// Specific info on a player based on an ID
import {fetchElementSummary} from "fpl-api";

export const specificPlayer = async (playerID) =>{
    return await fetchElementSummary(playerID)
}