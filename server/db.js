const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: "1977",
    host: 'localhost', 
    port: 5432,
    database: 'userdb'
});

module.exports = pool;