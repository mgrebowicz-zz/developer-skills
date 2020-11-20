
const Skill = require('../models/skill');

module.exports = {
    index,
    show
};

function index(req, res) {
    res.send(Skill.getAll());
};

function show(req, res) {
    let skill = Skill.getOne(req.params.id)
    res.send(skill);
}