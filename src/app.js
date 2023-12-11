import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.json({
        status:200,
        message:"Server on PORT 6969 working"
    })
})
app.listen(6969,()=>{
    console.log("Listening on PORT 6969");
})