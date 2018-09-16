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

exports.find_user_by_userId = (req, res) => {
  User.findOne({userId: req.body.userId}).then((user) => {
    return res.send(user);
  });
};