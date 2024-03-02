const mysql = require('mysql2');
const migrartions = require('mysql-migrations');
require('dotenv').config();

var connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

migrartions.init(connection,__dirname + '/migrations',function(){
    console.log("finished running migrartions");
});