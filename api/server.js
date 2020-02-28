// server and middleware
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//routes
const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth/users', usersRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send('<h1>Working baby wohoo!!</h1> ')
})

module.exports = app;