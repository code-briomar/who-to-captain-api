import {baseAPI} from "./baseAPI.js";

export const futureFixtures = () =>{
    try {
        const fixtureData = baseAPI.get("");
        return fixtureData
    } catch(error){
        return error
    }
}