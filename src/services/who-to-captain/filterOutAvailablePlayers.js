/*
    chances_of_playing_this_round: 100
    status: "a"
 */

export const filterOutAvailablePlayers = (playersData) => {
    return playersData.filter(player => player.chance_of_playing_this_round === 100 && player.status === "a");
}