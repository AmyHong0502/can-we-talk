let {Exercise} = require('../models/exercise');
let {Sleep} = require('../models/sleep');

exports.list_all = (req, res) => {
  let data = {
    sleep: [],
    exercise: []
  };

  Sleep.find()
    .then((sleeps) => {
      for (let i = 0; i < sleeps.length; i++) {
        data.sleep.push(sleeps[i]);
      }
    })
    .then(() => {
      Exercise.find()
        .then((exercises) => {
          for (let i = 0; i < exercises.length; i++) {
            data.exercise.push(exercises[i]);
          }
        })
        .then(() => {
        res.render('dashboard', {data});
      });
    })
    .catch((e) => {
      res.render('error', e);
    });
};
