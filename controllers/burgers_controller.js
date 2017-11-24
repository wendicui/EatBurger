var express = require("express");

//create router hbsObject
var router = express.Router();

//import from burger models
var burger = require("../models/burger.js")

router.get("/", function (req,res){
  burger.all(function(data){
  //  console.log(data)
    var dataObj = {
      data: data
    }
    res.render("index",dataObj);
  })
})

router.post("/api/burgers", function(req,res){
  var info = req.body;
  console.log(info.name);
  burger.create(["burger_name"],[info.name],function(result){
    res.status(200).end();
  });
})

router.put("/api/burgers/:id",function(req,rest){
  var target = req.param.id;
  var condition = `id = ${target}`;
  burger.update(condition, {devoured: true}, function (result){
    if(result.changedRows == 0){
      res.status(404).end();
    }else{
      res.status(200).end();
    }

  })
})

module.exports = router;
