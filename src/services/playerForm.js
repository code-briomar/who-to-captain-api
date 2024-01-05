import {generalInfo} from "./fpl/generalInfo.js";
import {event} from "./fpl/event.js";

export const playerForm = async (managerID,eventID) =>{
    const data = await event(managerID,eventID);
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
                playerForm : eachElementObject.form,
                playerValueForm : eachElementObject.value_form,
            }
            eachElementObject.id === elementList[i] ? filteredPlayers.push(pushedObject):null
        })
    }
    return filteredPlayers
}