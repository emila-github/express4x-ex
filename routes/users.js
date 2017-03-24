var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user', function(req, res, next) {
  res.send('Got a GET request at /user');
});

router.post('/user', function(req, res, next) {
  res.send('Got a POST request at /user');
});

// /user 节点接受 PUT 请求
router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});


module.exports = router;
