import {fetchH2HLeagueStandings} from "fpl-api";

// H2H standings in a league
export const headToHeadStandings = async (leagueID, pageStandings, pageNewEntries) =>{
    return fetchH2HLeagueStandings(leagueID, {pageStandings, pageNewEntries})
}