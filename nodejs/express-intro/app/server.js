const express = require('express');
const app = express();
const port = 3000;

// GET method route
// home route
app.get('/', (req, res) => {
  res.send(`<h1>Welcome to express!!</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
