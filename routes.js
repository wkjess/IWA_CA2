var express = require('express'),
    router = express.Router(),
    musicCtrl = require('./musics-controller');

router.get('/', function(req, res){
    return res.send('Hi');
});

router.get('/m1/musics', musicCtrl.getMusics);

module.exports = router;