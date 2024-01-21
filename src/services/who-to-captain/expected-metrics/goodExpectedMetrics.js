import {expectedGoals} from "./expectedGoals.js";
import {bonusPointSystem} from "./bonus-point-system.js";
import {fixtureDifficultyFactors} from "./fixture-difficulty-factors.js";
import {transfersStats} from "./transfers-stats.js";
import {overallIndex} from "./overall-index.js";
import {captaincyHistory} from "./captaincyHistory.js";

export const goodExpectedMetrics = async (playersData,managerID) => {
    playersData = expectedGoals(playersData)
    playersData = bonusPointSystem(playersData)
    playersData = await fixtureDifficultyFactors(playersData, managerID)
    // console.log(await captaincyHistory(playersData, managerID))
    playersData = transfersStats(playersData)
    playersData = overallIndex(playersData)
    return playersData
}