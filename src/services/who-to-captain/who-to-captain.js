import {squadPlayersData} from "./squadPlayersData.js";
import {filterOutAvailablePlayers} from "./filterOutAvailablePlayers.js";
import {filterOutPoorPerformingPlayers} from "./poor-performing/filterOutPoorPerformingPlayers.js";
import {goodExpectedMetrics} from "./expected-metrics/goodExpectedMetrics.js";
import {selectBestCaptain} from "../utils/selectBestCaptain.js";

export const whoToCaptain = async (managerID) => {
    let playersData = await squadPlayersData(managerID);
    // Filter out injured players
    playersData = filterOutAvailablePlayers(playersData)
    //Filter out poor performing players
    // playersData = filterOutPoorPerformingPlayers(playersData)
    //Best Player to Captain based on Expected Metrics
    playersData = await goodExpectedMetrics(playersData, managerID)
    console.table("Players Data: "+playersData);
    // let bestCaptain = selectBestCaptain(await playersData);
    // bestCaptain = await playersData;
    return playersData;
}