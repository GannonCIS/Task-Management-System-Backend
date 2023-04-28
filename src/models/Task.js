const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "please enter task name"],
  },
  description: {
    type: String,
    trim: true,
    required: false,
  },
  completed: {
    type: Boolean,
    required: [true, "needs completion status"],
  },
  project: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema);
