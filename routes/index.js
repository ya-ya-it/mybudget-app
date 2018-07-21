const express = require('express');
const budgetController = require('../controllers/budgetController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

/* GET home page. */
router.get('/', budgetController.homePage);

router.get('/budget', budgetController.else);

router.get('/register', budgetController.else);
router.post('/register', budgetController.else);

router.get('/login', budgetController.else);
router.post('/login', budgetController.else);

module.exports = router;
