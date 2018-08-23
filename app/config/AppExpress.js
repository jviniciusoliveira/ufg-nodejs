var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');


module.exports = function() {
    
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(express.static('./app/public'));
    app.use(bodyParser.urlencoded({ extended: true }));
   
    consign({cwd: 'app'})
        .include('repository')
        .include('routes')
        .into(app);

    return app;
}