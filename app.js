const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
let items = ["Complete Project","Study Operating System","Code Graph"];
let workItems = [];
app.set('view engine', 'ejs');

const path = require("path");
app.use(express.static("public"));
app.get("/", function(req, res){
   
    let today = new Date();

    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    let day = today.toLocaleDateString("en-US", options);


    res.render("list",{
        listTitle : day, newItem : items
    });
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newItem : workItems});
});

app.listen(3000, function(){
    console.log("Server Running....");
})