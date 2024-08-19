const db = require('../modules/db');

module.exports = async (req, res) => {
    try {
        let projectList = await db.getProjects();
        res.status(200).json(projectList);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
