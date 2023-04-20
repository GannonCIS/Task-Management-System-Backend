const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "please enter project name"],
  },
  description: {
    type: String,
    trim: true,
    required: false,
  },
  tasks: [{
    type: mongoose.SchemaTypes.ObjectId,
    trim: true,
    required: false
  }],
  completed: {
    type: Boolean,
    required: [true, "needs completion status"],
  },
});

module.exports = mongoose.model("Project", projectSchema);
