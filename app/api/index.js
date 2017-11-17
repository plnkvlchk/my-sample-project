var Router = require('express').Router;
var get = require('./users').get;
var post = require('./users').post;
var remove = require('./users').delete;

var router = Router();

router.get('/user', get.getUser);
router.post('/user', post.postUser);
router.delete('/user', remove.deleteUser);

module.exports = router;
