
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill
};

function newSkill(req, res) {
    res.render('skills/new')
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.name),
        skillName: Skill.getAll().findIndex(skill => skill.name === req.params.name)
    });
}