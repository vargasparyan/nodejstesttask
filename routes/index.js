var express = require('express');
var router = express.Router();
var nodejsModule = require('npm-nodejstesttask-pkg');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Array to String' });
});
router.post('/passarray',function(req, res, next){
  let stringarr = nodejsModule.arrToString(req.body.array);
  res.send(stringarr);
})
module.exports = router;
