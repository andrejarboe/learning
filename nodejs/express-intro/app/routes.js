const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.render('../assets/views/homepage.pug');
});


module.exports = router;
