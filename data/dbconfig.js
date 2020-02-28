const config = require('../knexfile.js');
const knex = require('knex');

const environment = process.env.DB_ENV || "development";

module.exports = knex(config[environment]);