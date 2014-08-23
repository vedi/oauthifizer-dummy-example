var express = require('express');
var passport = require('oauthifizer').passport;

var router = express.Router();

/* GET users listing. */
router.get('/',
  passport.authenticate('bearer', { session: false }),
  function (req, res) {
    res.send('respond with a resource');
  }
);

module.exports = router;
