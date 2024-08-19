const db = require('../modules/db');

module.exports = async (req, res) => {
    let projectList = await db.getProjects();
    res.json(projectList);
};
