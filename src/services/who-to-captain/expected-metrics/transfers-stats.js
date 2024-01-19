export const transfersStats = (playersData) => {
    return playersData
        .sort((a, b) => b.transfers_in_event - b.transfers_out_event - (a.transfers_in_event - a.transfers_out_event))
        .slice(0, 5);
}