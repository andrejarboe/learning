const express = require('express');
const  router = express.Router();
const db = require('../database/connection');

router.get('/', (req, res) => {
  res.render('../assets/views/homepage.pug');
});

router.get('/post/create', (req, res) => {
  res.render('../assets/views/post/create.pug');
});

router.post('/post/create', (req, res) => {
  const post = req.body
  db.query(
    `INSERT INTO posts (title, description, image_url) VALUES ('${post.title}', '${post.description}', '${post.image_url}')`,
    (error, results) => {
      if(error){
        console.log('error');
        console.log(error);
        return res.redirect('/post/create')
      }else{
        return res.redirect('/')
      }
  });
  // console.log(req.body);
  // res.json(post)
  // console.log(res.json(post));
  // res.render('../assets/views/post/create.pug');
  // res.send('hit /post/create')
});

// has to go after post/create because it will capture everything after post so it wil think post/create is a post/:id 
router.get('/post/:id', (req, res) => {
  res.render('../assets/views/generic.pug');
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
