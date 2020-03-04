const router = require('express').Router();
const Users = require('../users/users-model.js');
const restricted = require('./restricted-middleware.js');
const bcrypt = require('bcryptjs');
const secrets = require('./secrets.js')
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    console.log(user);

    Users.add(user).then(u => {
        res.status(201).json(u);
    })
    .catch(err => {
        res.status(500).json({message: "Could not add user to the database", error: err})
    })
});

router.post('/login', (req, res) => {
    let {username, password} = req.body;
    console.log(password)

    Users.findBy({username})
        .first()
        .then(user => {
            console.log(user)
            const a = bcrypt.compareSync(password, user.password)
            console.log(a)
        if (user && a ) {

            const token = generateToken(user);
            console.log("im here")
            req.headers.authorization = token;
            res.status(200).json({
                message: "login successful",
                token,
                user
            });
        } else {
            res.status(401).json({message: "Invalid credentials"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});


function generateToken(user) {
    console.log("im here")
    const payload = {
      subject: user.id,
      username: user.username
    };

    const options = {
      expiresIn: "1d"
    };
    let t = jwt.sign(payload, secrets.jwtSecret, options);
    console.log(t);
    return t
  }

module.exports = router;