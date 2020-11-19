
const Skill = require('../models/skill');

module.exports = {
    index,
    show
};

function index(req, res) {
    res.send(Puppy.getAll());
};

function show(req, res) {
    let puppy = Puppy.getOne(req.params.id)
    res.send(puppy);
}