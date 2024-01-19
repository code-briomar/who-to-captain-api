// I'll use this function in the future
export const fixtureDifficultyFactors = () => {
    let responseList = fixtureDifficultyFactors(playersData)
    responseList = responseList.sort((a, b) => b.homeTeamDifficulty - b.awayTeamDifficulty - (a.homeTeamDifficulty - a.awayTeamDifficulty))
    return responseList.slice(0, 5);
}