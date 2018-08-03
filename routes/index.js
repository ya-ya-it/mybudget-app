const express = require('express');
const indexController = require('../controllers/indexController');
const budgetController = require('../controllers/budgetController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.homePage);
router.get('/contact', indexController.contact);

router.get('/dashboard', budgetController.dashboard);

router.get('/current-expenses', budgetController.currentExpenses);
router.get('/add-expenses', budgetController.addExpenses);
router.post('/add-expenses', budgetController.createExpenses);

router.get('/register', userController.registerForm);
router.post('/register', userController.register);

router.get('/google', authController.googlePre);
router.get('/google/callback', authController.googlePost);

router.get('/login', userController.loginForm);
router.post('/login', authController.login);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
