
module.exports = {
    client: 'postgresql',
    connection: {
      database: 'bdcrud',
      user:     'postgres',
      password: 'Cripixx25'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }


