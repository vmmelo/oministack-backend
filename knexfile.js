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
    client: 'pg',
    connection: {
      host: 'ec2-54-197-48-79.compute-1.amazonaws.com',
      database: 'd83uov1r6f42hg',
      user:     'ivcpwnlbhzlilp',
      password: 'b0a705ae77ba357d4cbb35cf8c574ad8660d4082c40ce7cf4915f26183e959b0',
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
