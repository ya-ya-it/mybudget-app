const passport = require('passport');
const User = require('../models/User');

exports.settings = (req, res, next) => {
  res.render('settings', {
    title: 'Settings',
    isActive: 'settings',
  });
};

exports.register = (req, res, next) => {
  res.render('register', {
    title: 'register',
    isActive: 'register',
  });
};

exports.login = (req, res, next) => {
  res.render('login', {
    title: 'login',
    isActive: 'login',
  });
};
