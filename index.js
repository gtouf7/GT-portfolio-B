const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

// express app setup
const app = express();
const port = process.env.PORT || 7777;

const db = require('./modules/db');

// CORS enabling
app.use((req, res, next) => {
  const allowedOrigins = [
    'https://touf.me', //new Production url
    'gt-portfolio-b.vercel.app', // Production url
    'http://localhost:7777' // Development url
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET skills
app.get("/api/skills", async (req, res) => {
    try {
        let skillList = await db.getSkills();
        res.json(skillList);
    } catch (error) {
        console.error("Error fetching skills:", error.message);
        res.status(500).json({ error: "Failed to fetch skills" });
    }
});

// GET projects
app.get("/api/projects", async (req, res) => {
    try {
        let projectList = await db.getProjects();
        res.json(projectList);
    } catch (error) {
        console.error("Error fetching projects:", error.message);
        res.status(500).json({ error: "Failed to fetch projects" });
    }
});

// Local testing for getting the API data -- COMMENTED OUT
// SKILLS => localhost:7777/api/skills
// PROJECTS => localhost:7777/api/projects
/*    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`);
    });
*/
// Serverless export
module.exports = (req, res) => {
    return app(req, res);
};
