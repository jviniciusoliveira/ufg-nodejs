var express = require('express');
var app = express();
var consign = require('consign');


module.exports = function() {
    
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    consign({cwd: 'app'})
        .include('routes')
        .into(app);

    return app;
}