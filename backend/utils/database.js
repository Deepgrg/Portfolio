const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});

module.exports = pool.promise();
