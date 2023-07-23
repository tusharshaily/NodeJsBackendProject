const express = require("express")

var httpStatus = require('http-status-codes')

const app = express();


const PORT = 8087

app.get("/",(req, res)=>{
    res.status(httpStatus.StatusCodes.OK).send("This is ok")
})

app.get("/api/v1/:token",(req, res)=>{
    res.status(httpStatus.StatusCodes.OK).json({
        "param" : req.params.token
    })
})

app.listen(PORT,()=>{
    console.log("Server started")
})