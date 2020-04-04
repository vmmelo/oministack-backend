// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'ec2-3-91-112-166.compute-1.amazonaws.com',
      database: 'dc9079ejr2mrp1',
      user:     'jcdrsdgrksxpfx',
      password: '24589fd5fe7a2cd8cbf9c59710560ddd23c02574a835b8829ec63fe1bd1a1a2c',
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
    useNullAsDefault: true
  }

};
