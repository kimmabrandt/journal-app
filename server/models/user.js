var mongoose = require('mongoose'),
  passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
  email: {
    type: String,
    required: '{PATH} is required!'
  }
});

// Passport-local-mongoose will store the username, the
// hashed password, and the salt value inside a username,
// hash and salt field

// configure to use email for username field
User.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', User);
