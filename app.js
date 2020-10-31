'use strict';

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set('view engine', 'ejs');

app.get("/", (req,res) => {
 res.sendFile(__dirname + "/index.html");
 var today = new Date();
 var getTheDay = today.getDay();
   var day = "";
 switch(getTheDay) {
   case 0 :
     day = "Saturday";
     break;
     case 1 :
     day = "Sunday";
     break;
     case 2 :
     day = "Monday";
     break;
     case 3 :
     day = "Tuesday";
     break;
     case 4 :
     day = "Wednesday";
     break;
     case 5 :
     day = "Thursday";
     break;
     case 6 :
     day = "Friday";
     break;
 }

 res.render("lists", {kindOfDay: day});









});

app.listen(2000, console.log("server runnig on port 2000..."));