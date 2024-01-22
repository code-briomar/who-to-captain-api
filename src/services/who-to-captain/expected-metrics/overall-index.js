export const overallIndex = (playersData) => {
    return playersData
        .sort((a, b) => {
            if (a.ict_index_rank_type !== b.ict_index_rank_type) {
                return a.ict_index_rank_type < b.ict_index_rank_type ? -1 : 1;
            } else if (a.ict_index_rank !== b.ict_index_rank) {
                return a.ict_index_rank - b.ict_index_rank;
            } else {
                return a.ict_index - b.ict_index;
            }
        })
        .slice(0, 1)
}