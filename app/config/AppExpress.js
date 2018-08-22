var express = require('express');
var app = express();
var consign = require('consign');


module.exports = function() {
    
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(express.static('./app/public'));
   
    consign({cwd: 'app'})
        .include('repository')
        .include('routes')
        .into(app);

    return app;
}