export const oponentFactors = (playersData) => {
    return playersData
        .sort((a, b) => b.teamDifficulty - b.opponentTeamDifficulty - (a.teamDifficulty - a.opponentTeamDifficulty))
        .slice(0, 5);
}