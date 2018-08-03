const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.isLoggedIn = (req, res, next) => {
  // first check if user is authenticated
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect('/login');
};

exports.login = passport.authenticate('local', {
  successRedirect: '/current-expenses',
  failureRedirect: '/login',
  failureMessage: 'Invalid Login',
});

exports.googlePre = passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read',
  ],
});

exports.googlePost = passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login',
});
