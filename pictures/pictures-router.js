const router = require('express').Router();
const Pictures = require('./pictures-model.js');

router.get('/', (req, res) => {
    return Pictures.find()
        .then(p => {
            res.status(201).json(p)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
});

router.get('/:id', (req, res) => {
    return Pictures.findById(req.params.id)
        .then(p => {
            res.status(201).json(p)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.post('/', (req, res) => {
    Pictures.add(req.body)
        .then(p => {
            res.status(201).json(p)
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

module.exports = router;