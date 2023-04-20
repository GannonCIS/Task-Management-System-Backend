const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task-controller');
/*
* APP Routes
*/
router.post('', taskController.insertTask);
router.delete('/:id', taskController.deleteTask);
router.view('/:id', taskController.getTasks);
router.update('/:id', taskController.updateTask);

module.exports = router;