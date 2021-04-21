var http = require('http'),
    path = require('path'),
    express = require('express');

    var router = express();
    var server = http.createServer(router);

    router.use(express.static(path.resolve(_dirname, 'views')));
    router.use(express.urlencoded({extended: true}));
    router.use(express.json());


    router.get('/', function(req, res){
        res.render('index');
    });


    server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
        var addr = server.address();
        console.log("Server listen at", addr.address + ":" + addr.port);
    });