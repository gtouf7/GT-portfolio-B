const db = require('../modules/db');

module.exports = async (req, res) => {
    let skillList = await db.getSkills();
    res.json(skillList);
};