const db = require('../data/dbconfig.js');

module.exports = {
    find,
    findById,
    findBy,
    add
}

function find() {
    return db('bids');
}

function findBy(filter) {
    return db('bids').where(filter);
}

async function add(bid) {
    const [id] = await db('bids').insert(bid);
    return findById(id);
}

function findById(id) {
    return db('bids').where({id}).first()
}