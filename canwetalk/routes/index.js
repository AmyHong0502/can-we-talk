let express = require('express');
let router = express.Router();

let userController = require('../controllers/userController');
let sleepController = require('../controllers/sleepController');
let exerciseController = require('../controllers/exerciseController');

let dashboardController = require('../controllers/dashboardController');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard', (req, res) => {
  dashboardController.list_all(req, res);
});

module.exports = router;
