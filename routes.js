var express = require('express'),
    router = express.Router(),
    musicCtrl = require('./music-controller');

router.get('/', function(req, res){
    return res.send('Hi');
});

router.get('/m1/music', musicCtrl.getMusic);

module.exports = router;