const knex = require('knex');
const configuration = require('../../knexfile');

// Pegando conexão de desenvolvimento
const connection = knex(configuration.development);

// Exportar conexão do banco de dados
module.exports = connection;