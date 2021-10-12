const express = require('express');
const app = express();
const db = require('../database/connection');
const port = 3000;
// const bodyParser = require('body-parser');
const routes = require('./routes.js');

// using body parser for post request data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Routs
app.use('/', routes);

//Static files
app.use(express.static('public'));

// template engine
app.set('view engine', 'pug');

// listening on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
