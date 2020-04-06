const knex = require('knex');
const configuration = require('../../knexfile');

let config;
//busca na variavel de ambiente qual banco usar (test, production ou development)
if(process.env.NODE_ENV !== undefined) {
    config = configuration[process.env.NODE_ENV];
} else {
    config = configuration.development;
}

const connection = knex(config);
module.exports = connection;