/**
 * Selects the best captain from an array of players based on form and expected points
 * @param {Array} players - Array of player objects with form and ep_this properties
 * @returns {Array} Array containing the single best captain candidate
 * 
 * Selection criteria:
 * 1. Primary: Highest form (recent performance)
 * 2. Tiebreaker: Highest ep_this (expected points this gameweek)
 */
export function selectBestCaptain(players) {
    // Best Captain has the highest recent form
    return players.sort((a, b) => {
        const aForm = a.form || 0;
        const bForm = b.form || 0;
        const aEpThis = a.ep_this || 0;
        const bEpThis = b.ep_this || 0;
        
        if (aForm !== bForm) {
            return aForm > bForm ? -1 : 1;
        } else {
            return aEpThis > bEpThis ? -1 : 1;
        }
    }).slice(0, 1);
}
