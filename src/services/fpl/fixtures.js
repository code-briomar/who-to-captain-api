import {fetchFixtures} from "fpl-api";

// Return all the fixtures in the specified gameweek.
export const fixtures = async (gameWeekID) =>{
    return fetchFixtures(gameWeekID)
}
