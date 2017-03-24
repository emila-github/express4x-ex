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


// 为路径定义多个路由成为可能 
// 第二个路由虽然不会带来任何问题，但却永远不会被调用，因为第一个路由已经终止了请求-响应循环。
// 一个中间件栈，处理指向 /user/test/:id 的 GET 请求
router.get('/user/test/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.send('User Info');
});

// 处理 /user/test/:id， 打印出用户 id
router.get('/user/test/:id', function (req, res, next) {
  res.end(req.params.id);
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



// 一个中间件栈，处理指向 /user/:id 的 GET 请求
router.get('/userverb/:id', function (req, res, next) {
  // 如果 user id 为 0, 跳到下一个路由
  if (req.params.id == 0) next('route');
  // 否则将控制权交给栈中下一个中间件
  else next(); //
}, function (req, res, next) {
  console.log('regular page')
  // 渲染常规页面
  res.render('regular', { title: 'Express regular' });
});

// 处理 /user/:id， 渲染一个特殊页面
router.get('/userverb/:id', function (req, res, next) {
  console.log('special page')
  res.render('special', { title: 'Express special' });
});


module.exports = router;
