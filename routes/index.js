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

router.get('/dashboard', budgetController.dashboard);
router.get('/current-expenses', budgetController.currentExpenses);
router.get('/plan-expenses', budgetController.planExpenses);
router.get('/current-income', budgetController.currentIncome);
router.get('/plan-income', budgetController.planIncome);

router.get('/settings', userController.settings);

router.get('/register', userController.register);
router.post('/register', userController.register);

router.get('/login', userController.login);
router.post('/login', userController.login);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
