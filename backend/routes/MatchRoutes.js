const router = require('express').Router();
const Match = require('../models/Match');

router.get('/', (req, res) => {
    Match.find()
        .then(matches => res.json(matches))
        .catch(err => res.status(400).json({'Error' : err.message}));
});

router.get('/:id', (req, res) => {
    Match.findById(req.params.id)
        .then(match => res.json(match))
        .catch(err => res.status(400).json({'Error' : err.message}));
});

router.post('/add', (req, res) => {
    Match.create({
        team1: req.body.team1,
        country1: req.body.country1,
        team2: req.body.team2,
        country2: req.body.country2,
        score1: Number(req.body.score1),
        score2: Number(req.body.score2),
    })
    .then(match => res.json(match))
    .catch(err => res.status(400).json({'Error' : err.message}));
});

router.post('/edit/:id', (req, res) => {
    Match.findByIdAndUpdate(req.params.id, {
        team1: req.body.team1,
        country1: req.body.country1,
        team2: req.body.team2,
        country2: req.body.country2,
        score1: Number(req.body.score1),
        score2: Number(req.body.score2),
    })
    .then(match => res.json(match))
    .catch(err => res.status(400).json({'Error' : err.message}));
});

router.delete('/delete/:id', (req, res) => {
    Match.findByIdAndRemove(req.params.id)
        .then(() => res.json({status: 'success'}))
        .catch(err => res.status(400).json({'Error' : err.message}));
});

module.exports = router;