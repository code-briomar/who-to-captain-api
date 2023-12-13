import { Router} from "express";
import { fetchBootstrap } from 'fpl-api'

const router = Router();

router.get("/all",async (req, res)=>{
    const data = await fetchBootstrap();
    res.json({statusCode: 200, data: data})
});
export default  router;