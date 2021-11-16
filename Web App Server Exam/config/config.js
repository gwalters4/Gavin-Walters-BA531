const path = require('path');
var config = {
       rootPath: path.normalize(__dirname + '/..'),
       app: { name: ' CRMLite' },
       port: 80,
       dburl:"mongodb+srv://gwalters4:<mongodbpassword>@cluster0.vpeqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
};


module.exports = config;