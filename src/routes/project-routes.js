const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project-controller');
/*
* Project Routes
*/
router.post('', projectController.insertProject);

module.exports = router;