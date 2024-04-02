var express = require('express');
var AnswersController = require('../controllers/getAnswers.ts')
var router = express.Router();


/* GET home page. */
router.get('/', AnswersController.getAnswers);
router.post('/', AnswersController.setAnswer);

module.exports = router;
