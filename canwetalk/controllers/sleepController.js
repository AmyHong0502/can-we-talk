const {MongoClient, ObjectID} = require('mongodb');
let bodyParser = require('body-parser');

let {mongoose} = require('./mongoose');
let {Sleep} = require('../models/sleep');

exports.create_sleep = (req, res) => {
  let newSleep = new Sleep({
    userId: req.body.userId,
    hours: req.body.hours
  });

  newSleep.save().then(() => {
    return res.send("New sleep is saved");
  }, (e) => {
    return res.status(400).render('error', e);
  });
};

exports.list_all = (req, res) => {
  Sleep.find().then((sleeps) => {
    res.json(sleeps);
  });
};
