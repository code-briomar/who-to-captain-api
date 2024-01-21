// I'll use this function in the future
import {futureFixturesDifficulty} from "../../teamPerGameweek.js";

export const fixtureDifficultyFactors = async (playerData,managerID) => {
    // TEAM DIFFICULTY - Difficulty of the team the player is playing against
    let responseList = await futureFixturesDifficulty(managerID)
    //Add new key : teamDifficulty
    for(const eachResponse of responseList) {
        if (eachResponse.data.teamId === eachResponse.data.homeTeamId) {
            //Map through playerData and append homeTeamDifficulty and awayTeamDifficulty
            playerData.map(eachPlayer => {
                if (eachPlayer.id === eachResponse.playerID) {
                    eachPlayer.teamDifficulty = eachResponse.data.homeTeamDifficulty
                }
            })
        } else {
            playerData.map(eachPlayer => {
                if (eachPlayer.id === eachResponse.playerID) {
                    eachPlayer.teamDifficulty = eachResponse.data.awayTeamDifficulty
                }
            })
        }
    }
    //Sort by teamDifficulty in ascending order - The first element will be the player with the easiest fixture
    playerData = playerData.sort((a, b) => a.teamDifficulty - b.teamDifficulty)
    return playerData.slice(0, 5);
}