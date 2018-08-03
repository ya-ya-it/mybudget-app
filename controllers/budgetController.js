const Expenses = require('../models/Expenses');
const url = require('url');

exports.dashboard = (req, res, next) => {
  Expenses.find((err, expenses) => {
    if (err) {
      res.render('error', {
        title: 'Error!'
      });
    } else {
      res.render('dashboard', {
        title: 'Dashboard',
        expenses,
        isActive: 'dashboard',
      });
    }
  });
};

exports.currentExpenses = (req, res, next) => {
  Expenses.find((err, expenses) => {
    if (err) {
      res.render('error', {
        title: 'Error!'
      });
    } else {
      res.render('current-expenses', {
        title: 'Expenses',
        expenses,
        isActive: 'current-expenses',
      });
    }
  });
};

exports.addExpenses = (req, res) => {
  res.render('add-expenses', {
    title: 'Add Expenses',
    isActive: 'current-expenses',
  });
};

exports.createExpenses = async (req, res) => {
  try {
    const expense = new Expenses(req.body);
    await expense.save();
    res.redirect('/current-expenses');
  } catch (err) {
    console.log(err);
  }
};

exports.planExpenses = (req, res, next) => {
  res.render('plan-expenses', {
    title: 'Plan expenses',
    isActive: 'plan-expenses',
  });
};
