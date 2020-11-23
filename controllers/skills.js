
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    req.body.learned = !!req.body.learned;
    Skill.update(req.params.name, req.body);
    res.redirect(`/skills/${req.params.name}`);
};

function edit(req, res) {
    const skill = Skill.getOne(req.params.name);
    res.render('skills/edit', { skill });
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.name);
    res.redirect('/');
};

function create(req, res) {
    debugger
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/');
};

function newSkill(req, res) {
    res.render('skills/new');
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.name),
    });
};