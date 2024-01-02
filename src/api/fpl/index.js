import { Router} from "express";
import {fetchBootstrap, fetchElementSummary, fetchFixtures} from 'fpl-api'
import {specificPlayer} from "../../services/fpl/specificPlayer.js";
import {fixtures} from "../../services/fpl/fixtures.js";
import {event} from "../../services/fpl/event.js";
import {getTeam} from "../../services/fpl/getTeam.js";
import {futureFixtures} from "../../services/fpl/futureFixtures.js";

const router = Router();

router.get("/general-info",async (req, res)=>{
    const data = await fetchBootstrap();
    res.status(200).json(data)
});

router.get("/fixtures",async(req,res)=>{
    //All fixtures of the season
    const data = await fetchFixtures();
    res.status(200).json(data)
})

router.get("/fixtures:event",async(req,res)=>{
    //Fixtures for a particular gameweek ('event')
    const eventID = req.params["event"];
    const data = await fixtures(eventID);
    res.status(200).json(data)
})

router.get("/fixtures:future",async(req,res)=>{
    //Fixtures for a future gameweek
    // If you set the future value to 0, you will get all fixtures,
    // but if 1 you will only get the upcoming fixtures.
    // I see this parameter as a boolean value (future = true or false).
    const futureID = req.params["future"];
    const data = await fixtures(futureID)
    res.status(200).json(data)
})

router.get("/specific-player:playerID",async(req,res)=>{
    //Detailed information on a player
    const playerID = req.params["playerID"]
    const data = await specificPlayer(playerID)
    res.status(200).json(data)
})

router.get("/team-per-gameweek/:IDs",async(req,res)=>{
    //managerID - ID of FPL player
    //eventID - Gameweek no.
    const { managerID, eventID } = JSON.parse(req.params["IDs"]);
    const data = await event(managerID,eventID);

    //Get the entries of the specific elements

    const picks = data["picks"];
    // Get the elements from `data`
    const elementList = []
    for(let i = 0; i < picks.length; i++){
        elementList.push(picks[i].element)
    }

    const elementSummary = await specificPlayer(elementList[0])
    let team_id = 0
    // If is_home is true, then the team ID is the team_h ID, else, the team ID is the team_a
    if(elementSummary["fixtures"][0].is_home === true){
        team_id = elementSummary["fixtures"][0].team_h;
    } else{
        team_id = elementSummary["fixtures"][0].team_a;
    }

    //Custom Service to Pull Future Fixtures
    const upcomingFixturesAPI = await futureFixtures();
    //Store the data portion of the incoming response
    const upcomingFixtures = upcomingFixturesAPI.data;
    console.log(upcomingFixtures)
    res.status(200).json(data)
})
export default  router;