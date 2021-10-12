const express = require('express');
const app = express();
const db = require('../database/connection');
const port = 3000;

const routes = require('./routes.js');
//Routs
app.use('/', routes);

//Static files
app.use(express.static('public'));

// templete engine
app.set('view engine', 'pug')

// listening on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
