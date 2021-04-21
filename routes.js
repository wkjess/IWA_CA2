var express = require('express'),
    router = express.Router(),
    musicCtrl = require('./controllers/musics-controller');

router.get('/', function(req, res){
    res.render('index');
});

router.get('/m1/musics', musicCtrl.getMusics);
router.get('/m1/musics/:id', musicCtrl.getMusic);
router.post('/m1/musics', musicCtrl.createMusic);
router.post('/m1/musics/:id', musicCtrl.updateMusic);
router.delete('/m1/musics/:id', musicCtrl.deleteMusic);

module.exports = router;