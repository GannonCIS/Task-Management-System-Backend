require('../config/dbConnect');
const Project = require('../models/Project');

getAllProjects = async(req, res) => {
    try {
      // const albums = await Album.find({})
      const projects = await Project.find();
      res.json({ page: page, limit:limitRecords, projects});
    } catch (err) {
      res.status(400).json({ message: err })
    } 
}

module.exports = {
    getAllProjects
}