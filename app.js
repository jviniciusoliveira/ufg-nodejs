var app = require('express')();

app.listen(3002, function() {
    
    app.get('/', function(req, res) {
        res.send('Server Up.');
    });
});
