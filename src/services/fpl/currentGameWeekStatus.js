import {fetchEventStatus} from "fpl-api";

export const currentGameWeekStatus = async () =>{
    return await fetchEventStatus();
}