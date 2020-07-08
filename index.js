//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://lowcalhost:27017/vaccinePipelineDB", {useNewUrlParser: true, useUnifiedTopology: true});

const vaccineSchema = {
    vaccineName: String,
    content: String
  };
  

app.get("/", function(req, res){
    console.log("My 2 million dollar app is now working");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});