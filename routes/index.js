const express = require('express');
const indexController = require('../controllers/indexController');
const budgetController = require('../controllers/budgetController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.homePage);
router.get('/about', indexController.about);
router.get('/contact', indexController.contact);

router.get('/dashboard', budgetController.else);
router.get('/current-expenses', budgetController.else);
router.get('/plan-expenses', budgetController.else);
router.get('/current-income', budgetController.else);
router.get('/plan-income', budgetController.else);

router.get('/settings', budgetController.else);

router.get('/register', budgetController.else);
router.post('/register', budgetController.else);

router.get('/login', budgetController.else);
router.post('/login', budgetController.else);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
