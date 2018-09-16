let express = require('express');
let router = express.Router();

let userController = require('../controllers/userController');
let sleepController = require('../controllers/sleepController');
let exerciseController = require('../controllers/exerciseController');

router.post('/user/create', (req, res) => {
  userController.create_user(req, res);
});

router.post('/user/findUserByUserId', (req, res) => {
  userController.find_user_by_userId(req, res);
});

module.exports = router;
