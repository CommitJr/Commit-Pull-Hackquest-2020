const knex = require('knex');
const configurations = require('../../knexfile');

const connection = knex(configurations.development)

module.exports = connection;