// H2H standings in a classic league
import {fetchClassicLeague} from "fpl-api";

export const h2hClassicLeague = async (leagueID, pageStandings, pageNewEntries, phase)=>{
    return fetchClassicLeague(leagueID,{pageStandings,pageNewEntries,phase})
}
