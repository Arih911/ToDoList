const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
var items = ["Complete Project","Study Operating System","Code Graph"];
app.set('view engine', 'ejs');
app.get("/", function(req, res){
   
    var today = new Date();

    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    var day = today.toLocaleDateString("en-US", options);


    res.render("list",{
        kindOfDay : day, newItem : items
    });
});

app.post("/", function(req, res){
    var task = req.body.newItem;
    items.push(task);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server Running....");
})