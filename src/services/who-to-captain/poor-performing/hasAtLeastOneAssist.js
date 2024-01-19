export const hasAtLeastOneAssist = (playersData) => {
    return playersData.filter(player => player.assists > 0);
}