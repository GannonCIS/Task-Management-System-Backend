require('../config/dbConnect');
const Task = require('../models/Task');

/**
* /api/albums/ 
* POST Single Album
*/
exports.insertSingleAlbum = async(req, res) => {

    const newTask = new Task({
      name: req.body.name,
      description: req.body.description,
      completed: false,
    });
  
    try {
      await newTask.save()
      res.json(newTask);
    } catch (err) {
      res.status(400).json( { message: err })
    }
  }