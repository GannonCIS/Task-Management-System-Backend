require('../config/dbConnect');
const Project = require('../models/Project');

getAllProjects = async(req, res) => {
    try {
      const projects = await Project.find({});
      res.json({projects});
    } catch (err) {
      res.status(400).json({ message: err })
    } 
}

getProjectById = async(req, res) => {
    try {
        const project = await Project.find({_id: req.params.id}).limit(1);
        res.json({project});
      } catch (err) {
        res.status(400).json({ message: err })
      } 
}
/**
 * POST api/projects
 * Create one project
 */
insertProject = async(req, res) => {
    const newProject = new Project({
        name: req.body.name,
        description: req.body.description,
        tasks: req.body.tasks,
        completed: req.body.completed,
    })    
  
    try {
      await newProject.save();
      res.json(newProject);
    } catch (err) {
      res.status(400).json( { message: err })
    }
}
  


module.exports = {
    getAllProjects,
    insertProject,
    getProjectById
}