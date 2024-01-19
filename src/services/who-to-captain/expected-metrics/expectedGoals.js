/*
    Goal Scoring forwards are more likely to be captained.
    .sort() to sort by expected goals
    .slice(0, 5) to get the top 5 players
 */
export const expectedGoals = (playersData) => {
    return playersData
        .sort((playerA, playerB) => playerB.expectedGoals - playerA.expectedGoals)
        .slice(0, 5);
}