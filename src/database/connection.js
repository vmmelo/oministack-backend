const knex = require('knex');
const config = require('../../knexfile');

const connection = knex(process.env.NODE_ENV === 'production' ? config.production : config.development);

module.exports = connection;