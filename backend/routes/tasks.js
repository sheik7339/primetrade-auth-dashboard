
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Temporary in-memory storage for tasks
// Each task: { id: number, text: string, userId: string }
let tasks = [
    { id: 1, text: 'Review project requirements', userId: 'user@example.com' },
    { id: 2, text: 'Setup development environment', userId: 'user@example.com' },
    { id: 3, text: 'Deploy to production', userId: 'user@example.com' }
];

// GET /api/tasks - Get all tasks for the logged in user
router.get('/', authMiddleware, (req, res) => {
    // Filter tasks for the logged-in user
    const userTasks = tasks.filter(task => task.userId === req.user.email);
    res.json({ tasks: userTasks });
});

// POST /api/tasks - Create a new task
router.post('/', authMiddleware, (req, res) => {
    const { text } = req.body;

    if (!text || !text.trim()) {
        return res.status(400).json({ message: 'Task text is required' });
    }

    const newTask = {
        id: Date.now(),
        text: text.trim(),
        userId: req.user.email
    };

    tasks.unshift(newTask); // Add to beginning of array
    res.status(201).json({ task: newTask });
});

// DELETE /api/tasks/:id - Delete a task
router.delete('/:id', authMiddleware, (req, res) => {
    const taskId = parseInt(req.params.id);
    
    // Find task and check ownership
    const taskIndex = tasks.findIndex(t => t.id === taskId && t.userId === req.user.email);

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found or unauthorized' });
    }

    // Remove task
    tasks.splice(taskIndex, 1);
    res.json({ message: 'Task deleted successfully', taskId });
});

module.exports = router;
