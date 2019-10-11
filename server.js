var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

var expressHandleBars = require('express-handlebars');

app.engine('handlebars', expressHandleBars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/planners_controller.js');

app.use(routes);

app.listen(PORT, function(){
    console.log('Server listening on: http://localhost:' + PORT);
});