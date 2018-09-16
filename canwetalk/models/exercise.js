const mongoose = require('mongoose');

let Exercise = mongoose.model('exercise', {
  userId: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  }
});

module.exports = {Exercise};
