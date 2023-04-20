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

deleteTask = async(req, res) => {
  let paramID = req.params.id;

  try {
    const data = await Task.deleteOne({ _id : paramID });
    res.json(data);
  } catch (err) {
    res.status(400).json( { message: err })
  }
}

module.exports = {
  insertTask,
  deleteTask
}