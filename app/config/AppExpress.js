var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressLayout = require('express-ejs-layouts');

module.exports = function() {

    var app = express();
    
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(express.static('./app/public'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(expressLayout);
   
    consign({cwd: 'app'})
        .include('repository')
        .include('controllers')
        .include('routes')
        .into(app);

    return app;
}