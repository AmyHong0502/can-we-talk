let express = require('express');
let router = express.Router();

let userController = require('../controllers/userController');
let sleepController = require('../controllers/sleepController');
let exerciseController = require('../controllers/exerciseController');

// User
router.post('/user/create', (req, res) => {
  userController.create_user(req, res);
});

router.post('/user/findUserByUserId', (req, res) => {
  userController.find_user_by_userId(req, res);
});

// Sleep
router.post('/sleep/create', (req, res) => {
  sleepController.create_sleep(req, res);
});

router.get('/sleep/read', (req, res) => {
  sleepController.list_all(req, res);
});

// Exercise
router.post('/exercise/create', (req, res) => {
  exerciseController.create_exercise(req, res);
});

router.get('/exercise/read', (req, res) => {
  exerciseController.list_all(req, res);
});

module.exports = router;
