/**
 * Filters out players who are unlikely to play in the current gameweek
 * @param {Array} playersData - Array of player objects
 * @returns {Array} Filtered array containing only players with >50% chance of playing
 * 
 * Filtering criteria:
 * - chance_of_playing_this_round must be greater than 50%
 * - Future: Could also filter by status === "a" (available)
 */
export const filterOutAvailablePlayers = (playersData) => {
    return playersData.filter(player => player.chance_of_playing_this_round > 50);
}