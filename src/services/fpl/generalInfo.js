import {fetchBootstrap} from "fpl-api";

// General data like players, teams, gameweeks etc.
export const generalInfo = async () =>{
    return await fetchBootstrap();
}