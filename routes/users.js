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

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
router.use('/user/:id', function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
// // 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
router.use('/user/:id', function(req, res, next) { // // 一个中间件栈，对任何指向 /user/:id 的 HTTP 请求打印出相关信息
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
}, function (req, res, next) {
	console.log('Request Type:', req.method);
  res.send('Got a GET request at /user/:id');
});


module.exports = router;
