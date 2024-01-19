import {squadPlayersData} from "./squadPlayersData.js";
import {filterOutAvailablePlayers} from "./filterOutAvailablePlayers.js";
import {filterOutPoorPerformingPlayers} from "./poor-performing/filterOutPoorPerformingPlayers.js";
import {goodExpectedMetrics} from "./expected-metrics/goodExpectedMetrics.js";

export const whoToCaptain = async (managerID) => {
    let playersData = await squadPlayersData(managerID);
    // Filter out injured players
    playersData = filterOutAvailablePlayers(playersData)
    //Filter out poor performing players
    playersData = filterOutPoorPerformingPlayers(playersData)
    //Best Player to Captain based on Expected Metrics
    playersData = goodExpectedMetrics(playersData, managerID)
    return playersData;
}