var http = require('http'),
    path = require('path'),
    express = require('express'),
    morgan = require('morgan'),
    connect = require('./connection');

var app = express();
var server = http.createServer(app);

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('tiny'));

app.use(require('./routes'));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    var addr = server.address();
    console.log("Server listen at", addr.address + ":" + addr.port);
});