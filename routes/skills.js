var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
const skill = require('../models/skill');

//RESTful Routes
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
router.get('/new', skillsCtrl.new);

module.exports = router;
