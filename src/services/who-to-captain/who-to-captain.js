import {squadPlayersData} from "./squadPlayersData.js";
import {filterOutAvailablePlayers} from "./filterOutAvailablePlayers.js";
import {filterOutPoorPerformingPlayers} from "./poor-performing/filterOutPoorPerformingPlayers.js";
import {goodExpectedMetrics} from "./expected-metrics/goodExpectedMetrics.js";
import {selectBestCaptain} from "../utils/selectBestCaptain.js";

/**
 * Generates captain recommendations for a Fantasy Premier League manager
 * @param {number} managerID - The FPL manager's unique ID
 * @returns {Promise<Array>} Promise resolving to array of recommended captain candidates
 * 
 * Algorithm steps:
 * 1. Fetch squad player data from FPL API
 * 2. Filter out players with low chance of playing (>50% required)
 * 3. Apply expected metrics analysis (goals, assists, BPS, fixture difficulty)
 * 4. Return top candidates sorted by captaincy potential
 * 
 * TODO: Re-enable poor performing players filter
 * TODO: Apply final best captain selection
 */
export const whoToCaptain = async (managerID) => {
    let playersData = await squadPlayersData(managerID);
    
    // Filter out injured players
    playersData = filterOutAvailablePlayers(playersData);
    
    // Filter out poor performing players (currently disabled)
    // playersData = filterOutPoorPerformingPlayers(playersData);
    
    // Apply expected metrics analysis
    playersData = await goodExpectedMetrics(playersData, managerID);
    
    console.table("Players Data: " + playersData);
    
    // TODO: Apply final captain selection
    // let bestCaptain = selectBestCaptain(playersData);
    
    return playersData;
}