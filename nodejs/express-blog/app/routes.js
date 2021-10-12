const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.render('../assets/views/homepage.pug');
});
router.get('/generic', (req, res) => {
  res.render('../assets/views/generic.pug');
});
router.get('/post/create', (req, res) => {
  res.render('../assets/views/post/create.pug');
});

router.post('/post/create', (req, res) => {
  const post = req.body
  // console.log(req.body);
  res.json(post)
  // console.log(res.json(post));
  // res.render('../assets/views/post/create.pug');
  // res.send('hit /post/create')
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
