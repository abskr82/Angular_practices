var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/fetchData', function(req, res, next) {
    console.log(req.query.page);
    fs.readFile('./test-data/data.json', 'utf8', function (err, data) {
    if (err) throw err;
      retArr = JSON.parse(data);
      res.send(retArr);
    });
});

module.exports = router;
