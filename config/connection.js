var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'wiad5ra41q8129zn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user:'yhqm1dtsvzvzx8zv',
    password: 'fswt3k5molp6fd1t',
    database: 'sico6hr322ttnqh3'
    
});

connection.connect(function(err){
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;