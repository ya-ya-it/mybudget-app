/**
* Project name: Assignment 2: Express Portfolio Site
* File name: authController.js
* Author's name: Daria Davydenko
* Web-site: https://mybudget-app.herokuapp.com/
* File description: This is a controller file with the functions to authorize user information.
* Pictures were taken from www.pexels.com
* Framework: https://materializecss.com/
*/

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
  successRedirect: '/current-expenses',
  failureRedirect: '/login',
});

exports.githubPre = passport.authenticate('github');

exports.githubPost = passport.authenticate('github', {
  successRedirect: '/current-expenses',
  failureRedirect: '/login',
});
