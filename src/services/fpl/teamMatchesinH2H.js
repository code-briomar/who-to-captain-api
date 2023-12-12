import {fetchH2HMatches} from "fpl-api";

// Get a team's matches in a Head to Head League
export const teamMatchesinH2H = async (leagueID, teamID, pageNumber) =>{
    return fetchH2HMatches(leagueID, teamID, pageNumber)
}