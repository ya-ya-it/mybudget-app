var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

//router.get('/', authController.isLoggedIn, userController.getUsers);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
