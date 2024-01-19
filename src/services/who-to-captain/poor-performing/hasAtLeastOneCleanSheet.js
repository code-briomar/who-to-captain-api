export const hasAtLeastOneCleanSheet = (playersData) => {
    return playersData.filter(player => player.clean_sheets > 0);
}