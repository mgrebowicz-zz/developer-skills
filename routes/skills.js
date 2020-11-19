var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
const skill = require('../models/skill');

//RESTful Routes

// GET /todos
router.get('/', skillsCtrl.index);
// GET /todos/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
