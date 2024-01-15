import {generalInfo} from "./fpl/generalInfo.js";
import {event} from "./fpl/event.js";
import {currentGameWeekStatus} from "./fpl/currentGameWeekStatus.js";

export const playerForm = async (managerID) =>{
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
                player_first_name : eachElementObject.first_name,
                player_second_name : eachElementObject.second_name,
                player_form : eachElementObject.form,
            }
            eachElementObject.id === elementList[i] ? filteredPlayers.push(pushedObject):null
        })
    }
    return filteredPlayers
}