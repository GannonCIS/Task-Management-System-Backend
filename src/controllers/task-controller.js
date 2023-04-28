require("../config/dbConnect");
const Task = require("../models/Task");

/**
 * POST /api/task
 * Create one new task
 */
insertTask = async (req, res) => {
  const newTask = new Task({
    name: req.body.name,
    description: req.body.description,
    completed: req.body.completed,
    project: req.body.project,
  });

  try {
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

/**
 * DELETE /api/tasks/:id
 * Delete one task by id
 */
deleteTask = async (req, res) => {
  let paramID = req.params.id;

  try {
    const data = await Task.deleteOne({ _id: paramID });
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

/**
 *
 * Query all
 */

getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.json(tasks);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

/**
 *
 * Update a single task, located by id
 */

updateTask = async (req, res) => {
  let reqTask = req.body;

  try {
    const task = await Task.updateOne(reqTask);
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = {
  insertTask,
  deleteTask,
  getTasks,
  updateTask,
};
