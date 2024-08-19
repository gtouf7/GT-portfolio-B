const mongoose = require('mongoose');

//DATABASE URL STRING
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

//Schema and model setup
    //skills
const SkillSchema = new mongoose.Schema({
    technologies: {
        languages: Array,
        databases: Array,
        frameworks_and_libraries: Array,
        other_technologies: Array
    },
    soft_skills: Array,
    other: {
        tools: Array,
        platform: Array
    }
});
    //projects
const ProjectSchema = new mongoose.Schema({
    project: Array
});

const Skill = mongoose.model('Skill', SkillSchema);
const Project = mongoose.model('Project', ProjectSchema);

async function connect() {
    await mongoose.connect(dbUrl); //database connection
}

//get skills from database
async function getSkills() {
    await connect();
    return await Skill.find({});
}

//get projects from database
async function getProjects() {
    await connect();
    return await Project.find({});
}

module.exports = { getSkills, getProjects }