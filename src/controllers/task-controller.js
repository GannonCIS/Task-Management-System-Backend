require('../config/dbConnect');
const Task = require('../models/Task');

/**
* /api/tasks
* POST Single Album
*/
insertTask = async(req, res) => {
  const newTask = new Task({
    name: req.body.name,
    description: req.body.description,
    completed: req.body.completed,
  });
  
  try {
    await newTask.save()
    res.json(newTask);
  } catch (err) {
    res.status(400).json( { message: err })
  }
}

module.exports = {
  insertTask
}