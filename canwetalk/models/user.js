const mongoose = require('mongoose');

let User = mongoose.model('user', {
  userId: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  },
  username: {
    type: String,
    minlength: 1,
    trim: true
  }
});

module.exports = {User};