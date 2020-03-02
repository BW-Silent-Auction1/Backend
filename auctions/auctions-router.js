const router = require('express').Router();
const Auctions = require('./auctions-model.js')

// add a new auction
// looking for username, auction-title, starttime, endtime, isActive

// SQLite does not have a storage class for storing dates 
// and/or times. Instead, the built-in Date and Time Functions 
// of SQLite are capable of storing dates and times as
//  TEXT , REAL , or INTEGER values: TEXT as ISO8601 strings (“YYYY-MM-DD HH:MM:SS. SSS”)

// create a new auction
router.post("/auth/users/:userid/auctions", (req, res ) => {
    // console.log(req.params)
    let auction = req.body;
    // auction["user-id"] = req.params.userid;  
    console.log(req.body)
    Auctions.add(auction).then(a => {
        res.status(201).json(a)
    })
    .catch(err => {
        res.status(500).json({message: "What the fuck man"})
    })
})

//returns all auctions
router.get("/auctions", (req, res) => {
    Auctions.find()
        .then(a => {
            res.status(201).json(a)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.put('/auth/users/:userid/auctions/:auctionid', (req, res) => {
    let id = {id: req.params.auctionid}
    let items = req.body
    console.log("Hi from put, auctionid is: ", req.params.auctionid);
    Auctions.update(items, id)
        .then(a => {
            console.log(items)
            console.log(id)
            res.status(200).json(a)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

module.exports = router;