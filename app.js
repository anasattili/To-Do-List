'use strict';

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/", (req,res) => {
 res.sendFile(__dirname + "/index.html");
});

app.listen(2000, console.log("server runnig on port 2000..."));