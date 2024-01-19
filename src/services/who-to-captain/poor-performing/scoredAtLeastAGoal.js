export const scoredAtLeastAGoal = (playersData) => {
    return playersData.filter(player => player.goals_scored > 0);
}