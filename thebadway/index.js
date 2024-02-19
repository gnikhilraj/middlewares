const express = require("express");

const app = express();

app.get("/health-checkup",function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username === "nikhil"  && password === "pass"){
        if(kidneyId == 1 || kidneyId == 2){
            res.json({
                msg : "your kidney is good"
            })
        }else{
            res.status(400).json({
                msg: "your kidney is not good"
            })
        }
        
    }else {
        res.status(400).json({
            msg : "bad input"
        })
    }
})


app.listen(3000);