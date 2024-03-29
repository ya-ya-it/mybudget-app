const express = require('express');
const indexController = require('../controllers/indexController');
const budgetController = require('../controllers/budgetController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const passport = require('passport');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.homePage);
router.get('/contact', indexController.contact);

router.get('/dashboard', budgetController.dashboard);

router.get('/current-expenses', authController.isLoggedIn, budgetController.currentExpenses);

router.get('/add-expenses', authController.isLoggedIn, budgetController.addExpenses);
router.post('/add-expenses', authController.isLoggedIn, budgetController.createExpenses);

router.get('/update-expenses/:id', authController.isLoggedIn, budgetController.editExpenses);
router.post('/update-expenses/:id', authController.isLoggedIn, budgetController.updateExpenses);

router.get('/delete-expenses/:id', authController.isLoggedIn, budgetController.deleteExpenses);

router.get('/register', userController.registerForm);
router.post('/register', userController.register);

router.get('/google', authController.googlePre);
router.get('/google/callback', authController.googlePost);

router.get('/github', authController.githubPre);
router.get('/github/callback', authController.githubPost);

router.get('/current-expenses/api', authController.isLoggedIn, budgetController.renderJSON);

router.get('/login', userController.loginForm);
router.post('/login', authController.login);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
