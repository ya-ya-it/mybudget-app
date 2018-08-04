/**
* Project name: Assignment 2: myBudget App
* File name: portfolioController.js
* Author's name: Daria Davydenko
* Web-site: https://mybudget-app.herokuapp.com/
* File description: This is a controller file with the functions to send information to the page.
* Pictures were taken from www.pexels.com
* Framework: semantic-ui.com
*/

exports.homePage = (req, res, next) => {
  res.render('index', {
    title: 'Home',
    isActive: 'home',
    user: req.user,
  });
};

exports.contact = (req, res, next) => {
  res.render('contact', {
    title: 'Contact Us',
    isActive: 'contact',
    user: req.user,
  });
};
