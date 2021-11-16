const express = require('express');
const path = require('path');
module.exports = function (app, config) {
    console.log(config.rootPath)
    app.use(express.static(config.rootPath + '/public'));
};

const models = fs.readdirSync(config.rootPath + '/app/models');
models.forEach((model) => {
    require(config.rootPath + '/app/models/' + model);
});
const routes = require('../app/routes/index');

app.use(function (req, res, next) {
    console.log('Request from ' + req.connection.remoteAddress);
    next();
});


module.exports = function (app, config) {
    console.log(config.rootPath)
    app.use(express.static(config.rootPath + '/public'));
};
try {
    mongoose.connect(
        config.dbURL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );
} catch (e) {
    console.log("could not connect");
}
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => logger.log("Connected to DB!"));
app.use(function (req, res) {
    res.type('text/plan');
    res.status(404);
    res.send('The resource you requested cannot be found');
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plan');
    res.status(500);
    res.send('500 Sever Error');
});
console.log("Starting application");