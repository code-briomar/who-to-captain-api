export const bonusPointSystem = (playersData) => {
    return playersData
        .sort((playerA, playerB) => playerB.bps - playerA.bps)
        .slice(0, 5);
}