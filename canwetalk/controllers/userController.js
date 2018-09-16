const {MongoClient, ObjectID} = require('mongodb');
let bodyParser = require('body-parser');

let {mongoose} = require('./mongoose');
let {User} = require('../models/user');

exports.create_user = (req, res) => {
  let newUser = new User({
    userId: req.body.userId,
    username: req.body.username
  });

  newUser.save().then(() => {
    return res.send("New user is saved");
  }, (e) => {
    return res.status(400).render('error', e);
  });
};
