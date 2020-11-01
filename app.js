'use strict';
var listInfo = [];
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/index.html");
  var options = { weekday: "long", day: "numeric" };
  var today = new Date();
  var day = today.toLocaleDateString("en-us", options);

  res.render("lists", { kindOfDay: day, orderLists:  listInfo});

});

app.post("/", (req,res) => {
  var listTypes = req.body.list;
  listInfo.push(listTypes);
  res.redirect("/");
  console.log(listInfo); 

});

app.listen(2000, console.log("server runnig on port 2000..."));