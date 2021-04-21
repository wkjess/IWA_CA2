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

exports.getMusic = function(req, res) {
    Music.findOne({_id: req.params.id}, function (err, music) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(music);
    });
};

exports.updateMusic = function(req, res) {
    Music.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, music) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(music);
    });
};

exports.deleteMusic = function(req, res) {
    Music.findByIdAndRemove(req.params.id, function (err, music) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(music);
    });
};