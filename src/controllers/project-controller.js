require('../config/dbConnect');
const Project = require('../models/Project');

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
    insertProject
}