const router = require('express').Router();
const Team = require('../models/Team');

router.get('/', (req, res) => {
    Team.find()
        .then(teams => res.json(teams))
        .catch(err => res.status(400).json({'Error' : err.message}));
});

router.post('/add', (req, res) => {
    Team.create({name: req.body.name, country: req.body.country})
        .then(team => res.json(team))
        .catch(err => res.status(400).json({'Error' : err.message}));
});

module.exports = router;