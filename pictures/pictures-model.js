const db = require('../data/dbconfig.js');

module.exports = {
    find, 
    findById,
    add
}

function find() {
    return db('pictures');
}

async function add(picture) {
    const [id] = await db('pictures').insert(picture);
    return findById(id);
}

function findById(id) {
    return db('pictures').where({id}).first()
}