var http = require('http');
var express = require('express');
var app = express();
app.use(function (req, res) {
    console.log('Request from ' + req.ip);
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});
http.createServer(app).listen(3000, function () {
    console.log('Express server listening on port ' + 3000);
})

app.get('/about', function (req, res) {
    res.send('About Us!');
});

app.use(function (req, res) {
    res.type('text/plan');
    res.status(404);
    res.send('404 Not Found');
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plan');
    res.status(500);
    res.send('500 Sever Error');
});