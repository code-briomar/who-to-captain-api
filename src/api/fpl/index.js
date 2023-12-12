import { Router} from "express";
import { fetchBootstrap } from 'fpl-api'

const router = Router();

router.get("/all",async (req, res)=>{
    const data = await fetchBootstrap();
    console.log(data)
    console.log('Fetched')
    res.json({data})
});
export default  router;