const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema();

module.exports = mongoose.model('Budget', budgetSchema);
