var orm = require('../config/orm.js');

var planner = {
    selectAll: function(cb){
        orm.selectAll('planners', function(res){
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne('planners', cols, vals, function(res){
            cb(res);
        })
    },

    updateOne: function(objColVals, condition, cb){
        orm.updateOne('planners', objColVals, condition, function(res){
            cb(res);
        });
    },
    
    deleteOne: function(condition, cb){
        orm.deleteOne('planners', condition, function(res){
            cb(res);
        });
    }

};

module.exports = planner;