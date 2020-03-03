const router = require('express').Router();
const Items = require('./items-model.js');

//get all items
router.get('/', (req, res) => {
    return Items.find()
        .then(i => {
            res.status(201).json(i);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// get item by id
router.get('/:id', (req, res) => {
    return Items.findById(req.params.id)
        .then(i => {
            res.status(201).json(i)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

// add item 
router.post('/', (req, res) => {
    return Items.add(req.body)
        .then(i => {
            res.status(201).json(i);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});


module.exports = router;
