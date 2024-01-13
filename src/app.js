import express from "express";
import fplRouter from "./api/fpl/index.js"
import cors from "cors"
export const app = express();

// MIDDLEWARE
app.use(cors())
app.use(fplRouter)

app.listen(6969,()=>{
    console.log("Listening on PORT 6969");
})