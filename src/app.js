import express from "express";
import fplRouter from "./api/fpl/index.js"
import swaggerJsDocs from "swagger-jsdoc"
import swaggerUI from "swagger-ui-express"
export const app = express();

// app.use(express.json)
app.use(fplRouter)

app.listen(6969,()=>{
    console.log("Listening on PORT 6969");
})