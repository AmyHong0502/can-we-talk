const {MongoClient, ObjectID} = require('mongodb');
let bodyParser = require('body-parser');

let {mongoose} = require('./mongoose');
let {Exercise} = require('../models/exercise');

exports.exercise_list = (req, res) => {
  Exercise.find().then((exercises) => {
    res.send('', exercises);
  })
};
