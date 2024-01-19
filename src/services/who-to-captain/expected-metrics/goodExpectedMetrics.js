import {expectedGoals} from "./expectedGoals.js";
import {bonusPointSystem} from "./bonus-point-system.js";
import {fixtureDifficultyFactors} from "./fixture-difficulty-factors.js";
import {transfersStats} from "./transfers-stats.js";
import {overallIndex} from "./overall-index.js";

export const goodExpectedMetrics = (playersData,managerID) => {
    playersData = expectedGoals(playersData)
    playersData = bonusPointSystem(playersData)
    // playersData = fixtureDifficultyFactors(playersData) - Currently not working
    // playersData = captaincyHistory(playersData, managerID) - Currently not working
    playersData = transfersStats(playersData)
    playersData = overallIndex(playersData)
    return playersData
}