/**
* Project name: Assignment 2: Express Portfolio Site
* File name: userController.js
* Author's name: Daria Davydenko
* Web-site: https://mybudget-app.herokuapp.com/
* File description: This is a controller file with the functions to authorize user information.
* Pictures were taken from www.pexels.com
* Framework: https://materializecss.com/
*/

const passport = require('passport');
const User = require('../models/User');


exports.registerForm = (req, res) => {
  res.render('register', {
    title: 'Register',
    isActive: 'register',
    warning: '',
    user: req.user,
  });
};

exports.register = (req, res, next) => {
  const user = new User({ username: req.body.username });

  User.register(user, req.body.password, (err, account) => {
    if (err) {console.log(err);
      // needed to say 'return' below otherwise node will complain that headers already sent.
      return res.render('register', {
        title: 'Register',
        isActive: 'register',
        warning: 'Sorry, that username is already taken. Try again.',
        user: req.user,
      });
    }
    // next();
    res.redirect('/'); /* success */
  });
};

exports.loginForm = (req, res) => {
  const messages = req.session.messages || [];

req.session.messages = [];


console.log(messages);
  res.render('login', {
    title: 'Login',
    isActive: 'login',
    messages,
    user: req.user,
  });
};
