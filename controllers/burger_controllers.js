const express = require("express");
const router = express.Router();
const burger= require("./../models/burger");


router.get("/", function(req,res){
burger.selectAll(function(data){
    console.log(data)
res.render("index", {burgers:data})
})
})

router.post("/api/burgers", function(req,res){
    burger.insertOne('burger_name', req.body.burger_name, function(result){
        res.status(200).end()
    })
})

router.put("/api/burgers/:id", function(req, res){
    let condition = " id = " + req.params.id;
    console.log(condition);
    burger.updateOne('devoured', req.body.devoured, condition, function(result){
        res.status(200).end()
    })
})









module.exports = router;