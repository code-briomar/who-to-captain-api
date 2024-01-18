import {event} from "./fpl/event.js";
import {specificPlayer} from "./fpl/specificPlayer.js";
import {futureFixtures} from "./fpl/futureFixtures.js";
import {currentGameWeekStatus} from "./fpl/currentGameWeekStatus.js";
import {generalInfo} from "./fpl/generalInfo.js";
export const playerExpectedPoints = async (managerID) =>{
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
    const playerNames = generalData["elements"].filter(eachElementObject => elementList.includes(eachElementObject.id))

    console.log(playerNames)
    //Benched players are players who are not playing in the current gameweek
    const benchedPlayers = picks.filter(eachPick => eachPick.is_captain === false && eachPick.is_vice_captain === false && eachPick.multiplier === 0);
    const benchedPlayersElementIDs = benchedPlayers.map(eachBenchedPlayer => eachBenchedPlayer.element)
    const benchedPlayerNames = generalData["elements"].filter(eachElementObject => benchedPlayersElementIDs.includes(eachElementObject.id))

    const fieldedPlayers = picks.filter(eachPick => eachPick.multiplier !== 0);
    const fieldedPlayersElementIDs = fieldedPlayers.map(eachFieldedPlayer => eachFieldedPlayer.element)
    const fieldedPlayerNames = generalData["elements"].filter(eachElementObject => fieldedPlayersElementIDs.includes(eachElementObject.id))

    fieldedPlayers.map(eachFieldedPlayer => {

        responseList.push({
            playerID: eachFieldedPlayer.element,
            data:{
                isCaptain: eachFieldedPlayer.is_captain,
                isViceCaptain: eachFieldedPlayer.is_vice_captain,
                first_name: fieldedPlayerNames.filter(eachPlayer => eachPlayer.id === eachFieldedPlayer.element)[0].first_name,
                second_name: fieldedPlayerNames.filter(eachPlayer => eachPlayer.id === eachFieldedPlayer.element)[0].second_name,
                position: generalData["element_types"].filter(eachElementObject => eachElementObject.id === fieldedPlayerNames.filter(eachPlayer => eachPlayer.id === eachFieldedPlayer.element)[0].element_type)[0].singular_name_short,
                teamID: playerSummaryList.filter(eachPlayer => eachPlayer.id === eachFieldedPlayer.element)[0]["fixtures"][0].is_home === true ? playerSummaryList.filter(eachPlayer => eachPlayer.id === eachFieldedPlayer.element)[0]["fixtures"][0].team_h : playerSummaryList.filter(eachPlayer => eachPlayer.id === eachFieldedPlayer.element)[0]["fixtures"][0].team_a,
                expectedPointsThisGameWeek: playerNames.filter(eachPlayer => eachPlayer.id === eachFieldedPlayer.element)[0].ep_this,
                homeTeamID: playerSummaryList.filter(eachPlayer => eachPlayer.id === eachFieldedPlayer.element)[0]["fixtures"][0].team_h,
                awayTeamID: playerSummaryList.filter(eachPlayer => eachPlayer.id === eachFieldedPlayer.element)[0]["fixtures"][0].team_a,
                kickOffTime: teamFixturesMap[playerSummaryList.filter(eachPlayer => eachPlayer.id === eachFieldedPlayer.element)[0]["fixtures"][0].team_a][0].kickoff_time
            }})
    })

    return responseList;
}