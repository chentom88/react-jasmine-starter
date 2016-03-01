var express = require('express'),
    app = express();

var port = 8080;
app.use(express.static('public'));

app.get('/info', function(req, res) {
    res.send({
        name: 'React Starter Application',
        version: '1.0.0'
    });
});

console.log("Starting react server on port " + port);
app.listen(port);
