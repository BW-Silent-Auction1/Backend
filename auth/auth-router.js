const router = require('express').Router();
const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
    let user = req.body;
    console.log(user)
    return Users.add(user).then(u => {
        res.status(200).json(u);
    })
    .catch(err => {
        res.status(500).json({message: "Could not add user to the database", error: err})
    })
})

module.exports = router;