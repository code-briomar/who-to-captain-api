import {Router} from "express";
import {fetchBootstrap, fetchFixtures} from 'fpl-api'
import {specificPlayer} from "../../services/fpl/specificPlayer.js";
import {fixtures} from "../../services/fpl/fixtures.js";
import {event} from "../../services/fpl/event.js";
import {futureFixturesDifficulty} from "../../services/teamPerGameweek.js";
import {generalInfo} from "../../services/fpl/generalInfo.js";
import {playerExpectedPoints} from "../../services/playerExpectedPoints.js";
import {playerForm} from "../../services/playerForm.js";

const router = Router();

router.get("/future-fixtures-difficulty/:IDs",async(req,res)=>{
    //managerID - ID of FPL player
    //eventID - Gameweek no.
    const { managerID, eventID } = JSON.parse(req.params["IDs"]);
    const responseList = await futureFixturesDifficulty(managerID, eventID)
    res.status(200).json(responseList)
})

router.get("/expected-points/:IDs",async(req, res)=>{
    const { managerID, eventID } = JSON.parse(req.params["IDs"]);
    const filteredPlayers = await playerExpectedPoints(managerID,eventID)
    res.status(200).json(filteredPlayers)
})

router.get("/player-form/:IDs",async(req, res)=>{
    const { managerID, eventID } = JSON.parse(req.params["IDs"]);
    const filteredPlayers = await playerForm(managerID,eventID)
    res.status(200).json(filteredPlayers)
})
export default  router;