const passport = require('passport');
const User = require('../models/User');

exports.settings = (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      res.render('error');
    } else {
      res.render('users', {
        title: 'Users',
        users,
        user: req.user,
      });
    }
  });
};

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
    if (err) {
      // needed to say 'return' below otherwise node will complain that headers already sent.
      return res.render('register', {
        title: 'Register',
        isActive: 'register',
        warning: 'Sorry, that username is already taken.  Try again.',
        user: req.user,
      });
    }
    next(); /* success */
  });
};

exports.loginForm = (req, res) => {
  const messages = req.session.messages || [];

  // clear session message
  req.session.messages = [];

  res.render('login', {
    title: 'Login',
    isActive: 'login',
    messages,
    user: req.user,
  });
};
