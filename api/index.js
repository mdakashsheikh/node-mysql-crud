const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 5003;

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '',
    database: 'crud_project1'
})

// const db = mysql.createConnection('http://localhost/phpmyadmin')

// db.connect(err => {
//     if (err) {
//         console.log('Not connected to database');
//         throw err;
//     } else {
//         console.log('Connected to database');
//     }
// })

app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movie_name, review) VALUES ('inception', 'good movie');";

    db.query(sqlInsert, (err, result) => {
        res.send('Hello MySQL');
    })
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})