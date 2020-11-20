const skills = [
    {name :'javascript', learned : false, timeToLearn : '1 year'}, 
    { name: 'recursion', learned: false, timeToLearn: '1 year' },
    { name: 'styling', learned: false, timeToLearn: '1 year' },
    { name: 'full-stack', learned: false, timeToLearn: '1 year' },
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
};

function getOne(name) {
    return skills.find(skill => skill.name === name);
};
