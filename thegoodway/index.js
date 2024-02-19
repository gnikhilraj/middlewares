const express = require("express");

const app = express();

function userMiddleware(req, res, next) {

    const username = req.headers.username;
    const password = req.headers.password;

    if (username == "nikhil" && password == "pass") {
        next();
    } else {
        res.status(400).json({
            msg: "Invalid credentials"
        })
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;
    if (kidneyId == 1 || kidneyId == 2) {
        next();
    } else {
        res.status(400).json({
            msg: "your kidney is not doing good"
        })
    }
}

app.use(userMiddleware, kidneyMiddleware);


app.get("/health-checkup", function (req, res) {
    res.send("you are healthy");
})



app.listen(3000);