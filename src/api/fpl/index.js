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

router.get("/manager/:managerUserName", async (req, res, next) => {
    try {
        const managerUserName = req.params["managerUserName"];
        
        // Validate username
        if (!managerUserName || managerUserName.trim().length === 0) {
            return res.status(400).json({
                error: "Manager username is required.",
                status: 400
            });
        }

        const managers = await getManager(managerUserName);
        res.status(200).json(managers);
    } catch (error) {
        next(error);
    }
})
router.get("/who-to-captain/:managerID", async (req, res, next) => {
    try {
        const managerID = parseInt(req.params["managerID"]);
        
        // Validate managerID
        if (isNaN(managerID) || managerID <= 0) {
            return res.status(400).json({
                error: "Invalid manager ID. Must be a positive number.",
                status: 400
            });
        }

        const responseList = await whoToCaptain(managerID);
        res.status(200).json(responseList);
    } catch (error) {
        next(error);
    }
})

router.get("/future-fixtures-difficulty/:managerID", async (req, res, next) => {
    try {
        const managerID = parseInt(req.params["managerID"]);
        
        // Validate managerID
        if (isNaN(managerID) || managerID <= 0) {
            return res.status(400).json({
                error: "Invalid manager ID. Must be a positive number.",
                status: 400
            });
        }

        const responseList = await futureFixturesDifficulty(managerID);
        res.status(200).json(responseList);
    } catch (error) {
        next(error);
    }
})

router.get("/expected-points/:managerID", async (req, res, next) => {
    try {
        const managerID = parseInt(req.params["managerID"]);
        
        // Validate managerID
        if (isNaN(managerID) || managerID <= 0) {
            return res.status(400).json({
                error: "Invalid manager ID. Must be a positive number.",
                status: 400
            });
        }

        const filteredPlayers = await playerExpectedPoints(managerID);
        res.status(200).json(filteredPlayers);
    } catch (error) {
        next(error);
    }
})

router.get("/player-form/:managerID", async (req, res, next) => {
    try {
        const managerID = parseInt(req.params["managerID"]);
        
        // Validate managerID
        if (isNaN(managerID) || managerID <= 0) {
            return res.status(400).json({
                error: "Invalid manager ID. Must be a positive number.",
                status: 400
            });
        }

        const filteredPlayers = await playerForm(managerID);
        res.status(200).json(filteredPlayers);
    } catch (error) {
        next(error);
    }
})
export default router;
