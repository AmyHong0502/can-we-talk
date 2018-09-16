const {MongoClient, ObjectID} = require('mongodb');
let bodyParser = require('body-parser');

let {mongoose} = require('./mongoose');
let {Exercise} = require('../models/exercise');

exports.create_exercise = (req, res) => {
  let newExercise = new Exercise({
    userId: req.body.userId,
    hours: req.body.hours
  });

  newExercise.save().then(() => {
    return res.send("New exercise is saved");
  }, (e) => {
    return res.status(400).render('error', e);
  });
};

exports.list_all = (req, res) => {
  Exercise.find().then((exercises) => {
    return res.json(exercises);
  });
};