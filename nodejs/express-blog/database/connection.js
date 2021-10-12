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
    console.log('Connected to the database');
    // Running Migration of tables
    // make sure tabel name is the name in all db.query()
    db.query('SELECT 1 FROM posts LIMIT 1', (error, results) => {
      if (error) {
        // create table
        console.log('Creating table POST');
        db.query(
          `CREATE TABLE posts(id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(60) NOT NULL, description MEDIUMTEXT NOT NULL, image_url MEDIUMTEXT NOT NULL)`,
          (error, results) => {
            if (error) {
              console.log(error);
              console.log('Error creating table');
            } else {
              console.log('Created table');
            }
          }
        );
      } else {
        console.log('Table POSTS already exist');
      }
    });
  } else {
    console.log('No connection..');
  }
});

module.exports = db;
