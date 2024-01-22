export function selectBestCaptain(players) {
    // Best Captain has the highest recent form
    return players.sort((a, b) => {
        if (a.form !== b.form) {
            return a.form > b.form ? -1 : 1;
        } else {
            return a.ep_this > b.ep_this ? -1 : 1;
        }
    }).slice(0, 1)

}
