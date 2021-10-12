const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'remotemysql.com',
  user: '6it2pguJ8m',
  password: 'jgxZEdBrVq',
  database: '6it2pguJ8m',
  multipleStatements: true,
});

db.connect((error) => {
  if (!error) {
    console.log('Connected to tht database');
  } else {
    console.log('No connection..');
  }
});

module.exports = db;
