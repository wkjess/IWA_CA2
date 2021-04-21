var Music = require('../models/musics');

exports.createMusic = function(req, res) {
    var newmusic = new Music(req,body);
    newmusic.save(function (err, music) {
        if (err) {
            res.status (400).json(err);
        }
        res.json(music);
    });
};

exports.getMusic = function(req,res){
    Music.find({}, function (err, music) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(music);
    });
};