const { request } = require('express');
const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});