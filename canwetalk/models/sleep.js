const mongoose = require('mongoose');

let Sleep = mongoose.model('sleep', {
  userId: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  }
});

module.exports = {Sleep};