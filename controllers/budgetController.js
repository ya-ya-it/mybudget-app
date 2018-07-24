const Budget = require('../models/Budget');
const url = require('url');

exports.dashboard = (req, res, next) => {
  res.render('dashboard', {
    title: 'Dashboard',
    isActive: 'dashboard',
  });
};

exports.currentExpenses = (req, res, next) => {
  res.render('current-expenses', {
    title: 'Current expenses',
    isActive: 'current-expenses',
  });
};

exports.planExpenses = (req, res, next) => {
  res.render('plan-expenses', {
    title: 'Plan expenses',
    isActive: 'plan-expenses',
  });
};

exports.currentIncome = (req, res, next) => {
  res.render('current-income', {
    title: 'Current income',
    isActive: 'current-income',
  });
};

exports.planIncome = (req, res, next) => {
  res.render('plan-income', {
    title: 'Plan income',
    isActive: 'plan-income',
  });
};
