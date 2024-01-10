const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '',
    database: 'crud_project1'
})

module.exports = db;