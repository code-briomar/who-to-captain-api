/*
    This function filters out players who have a form of less than 2.5
    points per game less than the average points per game of all players
    in the same position.
    goals_scored
    assists
    clean_sheets
 */
import {formLessThanTwoPointFive} from "./formLessThanTwoPointFive.js";
import {scoredAtLeastAGoal} from "./scoredAtLeastAGoal.js";
import {hasAtLeastOneAssist} from "./hasAtLeastOneAssist.js";
import {hasAtLeastOneCleanSheet} from "./hasAtLeastOneCleanSheet.js";

export const filterOutPoorPerformingPlayers = (playersData) => {
    playersData = formLessThanTwoPointFive(playersData)
    playersData = scoredAtLeastAGoal(playersData)
    playersData = hasAtLeastOneAssist(playersData)
    playersData = hasAtLeastOneCleanSheet(playersData)
    return playersData
}