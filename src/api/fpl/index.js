import {Router} from "express";
import {fetchBootstrap, fetchFixtures} from 'fpl-api'
import {specificPlayer} from "../../services/fpl/specificPlayer.js";
import {fixtures} from "../../services/fpl/fixtures.js";
import {event} from "../../services/fpl/event.js";
import {teamPerGameweek} from "../../services/teamPerGameweek.js";

const router = Router();
export const eventEmitter = new EventEmitter();

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
    const responseList = teamPerGameweek(managerID, eventID)
    res.status(200).json(responseList)
})
export default  router;