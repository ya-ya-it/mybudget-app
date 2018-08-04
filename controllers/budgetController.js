/**
* Project name: Assignment 2: Express Portfolio Site
* File name: budgetController.js
* Author's name: Daria Davydenko
* Web-site: https://mybudget-app.herokuapp.com/
* File description: This is a controller file with the functions to CRUD expenses data.
* Pictures were taken from www.pexels.com
* Framework: https://materializecss.com/
*/

const Expenses = require('../models/Expenses');
const url = require('url');

exports.dashboard = (req, res, next) => {
  Expenses.find((err, expenses) => {
    if (err) {
      res.render('error', {
        title: 'Error!',
        user: req.user,
      });
    } else {
      res.render('dashboard', {
        title: 'Dashboard',
        expenses,
        isActive: 'dashboard',
        user: req.user,
      });
    }
  });
};

exports.currentExpenses = (req, res, next) => {
  Expenses.find((err, expenses) => {
    if (err) {
      res.render('error', {
        title: 'Error!',
        user: req.user,
      });
    } else {
      res.render('current-expenses', {
        title: 'Expenses',
        expenses,
        isActive: 'current-expenses',
        user: req.user,
      });
    }
  });
};

exports.addExpenses = (req, res) => {
  res.render('add-expenses', {
    title: 'Add Expenses',
    isActive: 'null',
    user: req.user,
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

exports.deleteExpenses = (req, res) => {
  Expenses.findByIdAndRemove(
    { _id: req.params.id },
    async (err, gameJustDeleted) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/current-expenses');
      }
    },
  );
};

exports.editExpenses = (req, res) => {
  // use Game model to find selected document
  Expenses.findById({ _id: req.params.id }, (err, expenses) => {
    if (err) {
      console.log(err);
    } else {
      res.render('update-expenses', {
        title: 'Edit',
        expenses,
        isActive: 'null',
        user: req.user,
      });
    }
  });
};

exports.updateExpenses = (req, res) => {

  Expenses.update({ _id: req.params.id }, req.body, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/current-expenses');
    }
  });
};


exports.renderJSON = (req, res, next) => {
  Expenses.find((err, expenses) => {
    if (err) {
      res.render('error', {
        title: 'Error!',
        user: req.user,
      });
    } else {
      res.send(JSON.stringify(expenses));
    }
  });
};
