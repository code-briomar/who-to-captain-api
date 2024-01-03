import {Router} from "express";
import {fetchBootstrap, fetchFixtures} from 'fpl-api'
import {specificPlayer} from "../../services/fpl/specificPlayer.js";
import {fixtures} from "../../services/fpl/fixtures.js";
import {event} from "../../services/fpl/event.js";
import {futureFixturesDifficulty} from "../../services/teamPerGameweek.js";

const router = Router();

router.get("/future-fixtures-difficulty/:IDs",async(req,res)=>{
    //managerID - ID of FPL player
    //eventID - Gameweek no.
    const { managerID, eventID } = JSON.parse(req.params["IDs"]);
    const responseList = await futureFixturesDifficulty(managerID, eventID)
    res.status(200).json(responseList)
})
export default  router;