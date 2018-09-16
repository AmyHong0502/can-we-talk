let express = require('express');
let router = express.Router();

let userController = require('../controllers/userController.js');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.post('/user/create', (req, res) => {
  userController.create_user(req, res);
});

module.exports = router;
