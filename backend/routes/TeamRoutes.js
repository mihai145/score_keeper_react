const router = require('express').Router();
const Team = require('../models/Team');

router.get('/', (req, res) => {
    Team.find()
        .then(teams => res.json(teams))
        .catch(err => res.status(400).json({'Error' : err.message}));
});

router.get('/whichCountry/:name', (req, res) => {
    Team.find({name: req.params.name})
        .then(teams => {
            if(teams.length > 0) {
                res.json({country : teams[0].country});
            } else {
                res.status(400).json({'Error' : 'No team found with this name!'});
            }
        })
        .catch(err => res.status(400).json({'Error' : err.message}));
});

router.post('/add', (req, res) => {
    Team.create({name: req.body.name, country: req.body.country})
        .then(team => res.json(team))
        .catch(err => res.status(400).json({'Error' : err.message}));
});

module.exports = router;