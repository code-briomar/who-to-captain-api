import { Router } from "express";
import { futureFixturesDifficulty } from "../../services/teamPerGameweek.js";
import { playerExpectedPoints } from "../../services/playerExpectedPoints.js";
import { playerForm } from "../../services/playerForm.js";
import { whoToCaptain } from "../../services/who-to-captain/who-to-captain.js";
import { getManager } from "../../services/who-to-captain/getManager.js";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({
        message: "Fetch a shortlist for your FPL captain for this game week."
    })
})

router.get("/manager/:managerUserName", async (req, res) => {
    const managerUserName = req.params["managerUserName"];
    const managers = await getManager(managerUserName);
    res.status(200).json(managers)
})
router.get("/who-to-captain/:managerID", async (req, res) => {
    //managerID - ID of FPL player
    const managerID = JSON.parse(req.params["managerID"]);
    const responseList = await whoToCaptain(managerID)
    res.status(200).json(responseList)
})

router.get("/future-fixtures-difficulty/:managerID", async (req, res) => {
    //managerID - ID of FPL player
    //eventID - Gameweek no.
    const managerID = JSON.parse(req.params["managerID"]);
    const responseList = await futureFixturesDifficulty(managerID)
    res.status(200).json(responseList)
})

router.get("/expected-points/:managerID", async (req, res) => {
    const managerID = JSON.parse(req.params["managerID"]);
    const filteredPlayers = await playerExpectedPoints(managerID)
    res.status(200).json(filteredPlayers)
})

router.get("/player-form/:managerID", async (req, res) => {
    const managerID = JSON.parse(req.params["managerID"]);
    const filteredPlayers = await playerForm(managerID)
    res.status(200).json(filteredPlayers)
})
export default router;
