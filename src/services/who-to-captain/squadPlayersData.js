import {currentGameWeekStatus} from "../fpl/currentGameWeekStatus.js";
import {event} from "../fpl/event.js";
import {specificPlayer} from "../fpl/specificPlayer.js";
import {futureFixtures} from "../fpl/futureFixtures.js";
import {generalInfo} from "../fpl/generalInfo.js";

export const squadPlayersData = async(managerID)=>{
    //Fetch current game week
    const GameweekResponse = await currentGameWeekStatus();
    const currentGameweek = GameweekResponse.status[0].event;
    const responseList = []
    const data = await event(managerID,currentGameweek);
    //Get the entries of the specific elements
    const picks = data["picks"];
    // Get the elements from `data`
    const elementList = picks.map(pick => pick.element)
    //Loop to fetch specific player information
    //Promise.all() to fetch player summaries in parallel
    const playerSummaryPromises = elementList.map(eachElement => specificPlayer(eachElement))
    const playerSummaryList = await Promise.all(playerSummaryPromises)
    //Custom Service to Pull Future Fixtures
    const upcomingFixturesAPI = await futureFixtures();
    //Store the data portion of the incoming response
    const upcomingFixtures = upcomingFixturesAPI.data;
    const teamFixturesMap = upcomingFixtures.reduce((map, fixture)=>{
        (map[fixture.team_a] || (map[fixture.team_a] = [])).push(fixture);
        (map[fixture.team_h] || (map[fixture.team_h] = [])).push(fixture)
        return map
    },{})

    //Fetch Player Names from generalInfo() using elementList
    const generalData = await generalInfo();
    const playerData = generalData["elements"].filter(eachElementObject => elementList.includes(eachElementObject.id))

    return playerData;
}