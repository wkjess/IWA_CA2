var express = require('express'),
    router = express.Router(),
    musicCtrl = require('./controllers/musics-controller');

router.get('/', function(req, res){
    res.render('index');
});

router.post('/m1/musics', musicCtrl.createMusics);
router.get('/m1/musics', musicCtrl.getMusics);

module.exports = router;