const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config();
//express app set up
const app = express();
const port = process.env.PORT || 7777;

const db = require('./modules/db');

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/skills", async (req, res) => {
    let skillList = await db.getSkills();
    res.json(skillList);
});

app.get("/projects", async (req,res) => {
    let projectList = await db.getProjects();
    res.json(projectList);
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})

