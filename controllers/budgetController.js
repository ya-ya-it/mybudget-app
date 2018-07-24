const Budget = require('../models/Budget');
const url = require('url');

exports.else = (req, res) => {
  res.render('index', { title: 'To be continued...' });
};
