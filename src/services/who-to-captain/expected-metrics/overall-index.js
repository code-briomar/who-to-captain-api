export const overallIndex = (playersData) => {
    return playersData
        .sort((a, b) => {
            if (a.ict_index_rank_type !== b.ict_index_rank_type) {
                return a.ict_index_rank_type > b.ict_index_rank_type ? -1 : 1;
            } else if (a.ict_index_rank !== b.ict_index_rank) {
                return a.ict_index_rank - b.ict_index_rank;
            } else {
                return b.ict_index - a.ict_index;
            }
        })
        .slice(-1)[0]
}