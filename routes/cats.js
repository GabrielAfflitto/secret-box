var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cats');
});

router.get('/1', function(req, res, next){
  res.send('Cat number one');
})

module.exports = router;
