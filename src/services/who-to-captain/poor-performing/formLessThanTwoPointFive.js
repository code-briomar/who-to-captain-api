export const formLessThanTwoPointFive = (playersData) => {
    return playersData.filter(player => player.form > 2.5)
}