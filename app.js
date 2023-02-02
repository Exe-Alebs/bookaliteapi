const express = require('express')
const bodyParser = require('body-parser');
const CONFIG = require("./config/config")
const app = express()


app.get("/", (req, res) => {
    res.send("Welcome to bookalite")
})

app.listen(CONFIG.PORT, () =>{
    console.log(`Server started on http://localhost:${CONFIG.PORT}`)
} )