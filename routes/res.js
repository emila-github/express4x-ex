var express = require('express');
var router = express.Router();

/* GET res page. */
router.get('/', function(req, res, next) {
  res.render('res', { title: 'res' });
});

// 使用一个回调函数处理路由
router.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});

// 使用多个回调函数处理路由（记得指定 next 对象）
router.get('/example/b', function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});

// 使用回调函数数组处理路由：
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

router.get('/example/c', [cb0, cb1, cb2]);


// 混合使用函数和函数数组处理路由
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

router.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

module.exports = router;
