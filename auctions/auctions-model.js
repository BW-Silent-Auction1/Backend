const db = require('../data/dbconfig.js');

module.exports = {
    add,
    find,
    findById,
    findBy,
    update
}

function update(items, id) {
    return db('auctions')
        .where(id)
        .update(items)
}

async function add(auction) {
    const [id] = await db('auctions').insert(auction);
    return findById(id);
}

function find() {
    return db('auctions')
        // .select('id', 'auction-title', 'user-id', 'starttime', 'endtmime')
}

function findById(id) {
    return db('auctions').where({id}).first()
}

function findBy(filter) {
    return db('auctions').where(filter)
}