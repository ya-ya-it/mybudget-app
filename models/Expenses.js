const mongoose = require('mongoose');

// define a schema for the game model
// this and all other models inherit from mongoose.Schema

const expensesSchema = new mongoose.Schema({
  year: {
    type: Number,
  },
  month: {
    type: String,
    required: 'Please enter a month',
  },
  rent: {
    type: Number,
  },
  food: {
    type: Number,
  },
  buspass: {
    type: Number,
  },
});

module.exports = mongoose.model('Expenses', expensesSchema);
