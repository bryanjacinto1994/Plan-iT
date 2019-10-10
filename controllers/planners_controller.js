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

router.put('/api/planners/:id', function(req, res){
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    planner.updateOne({
        completed: req.body.completed
    }, condition, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    }); 
});

router.delete('/api/planners/:id', function(req, res){
    var condition = 'id = ' + req.params.id;

    planner.deleteOne(condition, function(result){
        if(result.affectedRows == 0){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    });
});

module.exports = router;