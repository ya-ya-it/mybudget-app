const Budget = require('../models/Budget');
const url = require('url');

exports.homePage = (req, res) => {
  res.render('index', { title: 'Home' });
};

exports.else = (req, res) => {
  res.render('index', { title: 'To be continued...' });
};
