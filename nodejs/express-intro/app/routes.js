const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.render('../assets/views/homepage.pug');
});

router.get('/pug', (req, res) => {
  res.render('../assets/views/testing.pug',
    {
      username: "andrejarboe",
      fname: "Andre",
      lname: "Jarboe",
      loggedIn: true,
      friends: ['Jane', 'Mike', 'Stephanie', "Jessica"]
    }
  );
});


module.exports = router;
