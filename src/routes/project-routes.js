const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project-controller');


/*
* Project Routes
*/
router.post('', projectController.insertProject);
router.get('', projectController.getAllProjects)
router.get('/:id', projectController.getProjectById)

module.exports = router;
