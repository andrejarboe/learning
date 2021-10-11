const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.render('../assets/views/homepage.pug');
});

// GET method route
// req = request
// res = response
// home route
router.get('/', (req, res) => {
  res.send(`<h1>Welcome to express!!</h1>`);
});
//about
router.get('/about', (req, res) => {
  console.log('Made it to the about page');
  return res.send(`<h1>Welcome to the about page!!</h1>`);
});
//user
// /user/andre/ga?low=65&high=90
router.get('/user/:username/:state', (req, res) => {
  console.log(req.params);
  const user = req.params;
  const query = req.query;
  return res.send(`
      <h1>User ${user.username}</h1>
      <h1>State ${user.state}</h1>
      <h1>Low: ${query.low}</h1>
      <h1>High: ${query.high}</h1>
    `);
});

module.exports = router;
