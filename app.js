const express = require("express");
const bodyparser = require("body-parser");

const app = express();
// app.use("bodyparser", {extended: true})

app.get("/", function(req, res){
    // res.sendFile(__dirname+"/index.html");
    var today = new Date();
    console.log(today);
})

app.listen(3000, function(){
    console.log("Server Running....");
})