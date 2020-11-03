'use strict';

//make the arry for the (li) and push every submit dynamically
let listInfo = ["byu food","cook food","eat food"];
let workList = [];
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// for using ejs template from github docs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(date);
  //res.sendFile(__dirname + "/index.html");
  // this block of code convert hte dayformate from (0-6) in js to formated the name of the day
 /*  let options = { weekday: "long", day: "numeric", month: "long" };
  let today = new Date();
  let day = today.toLocaleDateString("en-us", options); */
   // instead of res.send() to match the ejs file inside the views folder which is (lists.js)
   const day = date.getDate();
  res.render("lists", { kindOfDay: day, orderLists: listInfo });

});

app.post("/", (req, res) => {
  console.log(req.body);
  // from the form
  let listTypes = req.body.list;
  //check the name of button and the value of it to know which directory we want to view depend on the sumbit of the button
  if(req.body.lists === "work") {
    workList.push(listTypes);
    res.redirect("/work");
  }
  else {
  listInfo.push(listTypes);
  res.redirect("/");
  }
 
});

app.get("/work", (req, res) => {
  res.render("lists", { kindOfDay: "work list", orderLists: workList })
});

/* app.post("/work", (req, res) => {
  let listTypes = req.body.list;
  workList.push(listTypes);
  res.redirect("/work");
}) */

app.get("/about", (req,res) => {
 res.render("about");
});

app.listen(2000, () => { console.log("server runnig on port 2000...") });