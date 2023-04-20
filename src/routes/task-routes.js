const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task-controller');
/*
* APP Routes
*/
router.post('/api/tasks', taskController.insertTask);

module.exports = router;