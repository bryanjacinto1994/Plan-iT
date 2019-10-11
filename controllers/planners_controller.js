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

router.post('/api/planners', function(req, res){
    planner.insertOne([
        'plan_name', 'completed'
    ], [
        req.body.plan_name, req.body.completed
    ], function(result){
        res.json({ id: result.insertId });
    });
});


