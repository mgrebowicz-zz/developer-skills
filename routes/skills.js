var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
const skill = require('../models/skill');

//RESTful Routes
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:name', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:name', skillsCtrl.delete);
router.get('/:name/edit', skillsCtrl.edit);
router.put('/:name', skillsCtrl.update);


module.exports = router;
