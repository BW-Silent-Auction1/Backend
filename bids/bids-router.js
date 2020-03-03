const router = require('express').Router();
const Bids = require('./bids-model.js');

// get 
router.get('/', (req, res) => {
    return Bids.find()
        .then(b => {
            res.status(201).json(b)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

// get by id
router.get('/:id', (req, res) => {
    return Bids.findById(req.params.id) 
        .then(b => {
            res.status(201).json(b)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//get by other parameter
router.get('/', (req, res) => {
    return Bids.findby(req.body)
        .then(b => {
            res.status(201).json(b)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// add a bid
router.post('/', (req, res) => {
    console.log(req.body)
    return Bids.add(req.body)
        .then(b => {
            res.status(201).json(b)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;