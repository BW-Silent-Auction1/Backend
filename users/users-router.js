const router = require('express').Router();
const Users = require('./users-model.js');

// return list of all users
router.get("/", (req, res) => {
    return Users.find().then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// 
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    return Users.findById(req.params.id).then(u => {
        res.status(201).json(u)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});


module.exports = router;