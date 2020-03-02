const db = require('../data/dbconfig.js');

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('items');
}

async function add(item) {
    const [id] = await db('items').insert(item);
    return findById(id);
}

function findById(id) {
    return db('items')
        .where({id})
        .first()
}

