const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task-controller');
/*
* APP Routes
*/
router.post('/', taskController.insertTask);
router.delete('/:id', taskController.deleteTask);
router.get('/', taskController.getTasks);
router.put('/:id', taskController.updateTask);
router.put('/:id', taskController.completeTask);

module.exports = router;