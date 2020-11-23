const skills = [
    { name:'Javascript', learned: false, timeToLearn: '1 year' }, 
    { name: 'Recursion', learned: false, timeToLearn: '1 year' },
    { name: 'Styling', learned: false, timeToLearn: '1 year' },
    { name: 'Full-stack', learned: false, timeToLearn: '1 year' },
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(name, updatedSkill) {
    const skill = skills.find(s => s.name === name);
    Object.assign(skill, updatedSkill);
}

function deleteOne(name) {
    const idx = skills.findIndex(s => s.name === name);
    skills.splice(idx, 1);
};

function create(skill) {
    skill.name;
    skill.learned = false;
    skill.timeToLearn = '1 year';
    skills.push(skill);
};

function getAll() {
    return skills;
};

function getOne(name) {
    return skills.find(s => s.name === name);
};
