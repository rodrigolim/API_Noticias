const { Pool } = require('pg');

var ConBD = function(){
  return connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'portal_noticias',
    password: 'admin',
    port: 5432,
  });  
}

module.exports = function(){
  return ConBD;
}