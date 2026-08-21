const {Pool} = require('pg');

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'taskmanager',
    password: 'admin',
    port: 5432
});

module.exports = pool;