const skills = ['programming', 'recursion', 'customer service', 'leadership'];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills[id];
};
