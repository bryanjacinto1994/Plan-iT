var express = require('express');

var router = express.Router();

var planner = require('../models/planners.js');

router.get('/', function(req, res){
    planner.selectAll(function(data){
        var hbsObject = {
            planners: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

