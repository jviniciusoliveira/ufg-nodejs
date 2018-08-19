var app = require('./app/config/AppExpress')();

app.listen(3002, function() {
    
    app.get('/', function(req, res) {
        res.render('index');
    });
});
