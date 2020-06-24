const config = require('../knexfile.js')  //exportando as informações de conexão do banco
const knex = require('knex')(config) //instaciando as conexões do banco de dados na conexão

module.exports = knex