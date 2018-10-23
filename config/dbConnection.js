const { Pool } = require('pg');

module.exports = function(){
return connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'portal_noticias',
    password: 'admin',
    port: 5432,
  });
}