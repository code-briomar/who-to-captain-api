export const getManager = async (managerUserName) => {
    const managers = [
        {
            "manager_id": 28390731,
            "event_total": 45, //Gameweek total points
            "player_name": "Mk. .", // FPL player name
            "rank": 1, // Overall rank
            "last_rank": 1, // Last week's overall rank
            "rank_sort": 1, // Overall rank sort
        }
    ]
    return managers.filter((eachManager) => eachManager.player_name === managerUserName)
}