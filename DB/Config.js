const mysql = require('mysql2');
const dotenv = require('dotenv');
require('dotenv').config();


const dbconnection = async() => {
    var connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.PORT
    });
    connection.connect(function(err) {
        if (err) {
            console.error('Error connecting to the database: ' + err.stack);
            return;
        }
        console.log('Connected to the database as id ' + connection.threadId);
    });
    return connection;
}

module.exports = { dbconnection };