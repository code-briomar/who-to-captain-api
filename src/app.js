import express from "express";
import fplRouter from "./api/fpl/index.js"
export const app = express();

// app.use(express.json)
app.use(fplRouter)

app.listen(6969,()=>{
    console.log("Listening on PORT 6969");
})