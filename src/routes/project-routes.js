const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project-controller");

/*
 * Project Routes
 */
router.post("/", projectController.insertProject);
router.delete("/:id", projectController.deleteProject);
router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);
router.put("/:id", projectController.updateProject);
router.put("/:id", projectController.addTaskToProject);

module.exports = router;
