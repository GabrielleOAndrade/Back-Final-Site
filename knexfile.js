// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'bd_wiki',
      user: 'root',
      password: ''
    },
  },
production:{
  client: 'pg',
  connection:{
    host:'dpg-cmg72j2cn0vc73d5l0jg-a.oregon-postgres-WebGL2RenderingContext.com',
    port:5432,
    user:'root',
    password:'PMHzXKaowFr0XaRah7HGNFkMZUD7I5Fs',
    database: 'bd_lista',
    ssl: true,
  }
}
};
