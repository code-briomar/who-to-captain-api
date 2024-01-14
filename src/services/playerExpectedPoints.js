import {event} from "./fpl/event.js";
import {generalInfo} from "./fpl/generalInfo.js";
import {currentGameWeekStatus} from "./fpl/currentGameWeekStatus.js";

export const playerExpectedPoints = async (managerID) =>{
    //Fetch current game week
    const GameweekResponse = await currentGameWeekStatus();
    const currentGameweek = GameweekResponse.status[0].event;
    const data = await event(managerID,currentGameweek);
    //Get the entries of the specific elements
    const picks = data["picks"];
    // Get the elements from `data`
    const elementList = picks.map(pick => pick.element)
    const playersData = await generalInfo()
    const filteredPlayers= []
    for(let i = 0; i < elementList.length; i++){
        playersData["elements"].filter(eachElementObject=>{
            const pushedObject = {
                playerID : eachElementObject.id,
                playerEPThisFixture : eachElementObject.ep_this,
                playerEPNextFixture : eachElementObject.ep_next
            }
            eachElementObject.id === elementList[i] ? filteredPlayers.push(pushedObject):null
        })
    }
    return filteredPlayers
}