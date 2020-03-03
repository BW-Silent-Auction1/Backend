// server and middleware
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

//routes
const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');
const auctionsRouter = require('../auctions/auctions-router.js');
const picturesRouter = require('../pictures/pictures-router.js');
const itemsRouter = require('../items/items-router.js');
const bidsRouter = require('../bids/bids-router.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api', auctionsRouter);
app.use('/api/pictures', picturesRouter);
app.use('/api/items', itemsRouter);
app.use('/api/bids', bidsRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/party.md'));
})

module.exports = app;