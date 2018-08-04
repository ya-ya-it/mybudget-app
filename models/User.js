const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({});
const findOrCreate = require('mongoose-findorcreate');

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
