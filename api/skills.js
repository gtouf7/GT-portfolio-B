const db = require('../modules/db');

module.exports = async (req, res) => {
    try {
        let skillList = await db.getSkills();
        res.status(200).json(skillList);
    } catch (error) {
        console.error("Error fetching skills:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
