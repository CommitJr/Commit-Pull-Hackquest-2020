// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/database.sqlite'
    },
    migrations: {
        directory: './src/database/migrations'
    },
    useNullAsDefault: true
  }
};
