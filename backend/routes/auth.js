const express = require('express');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const SECRET_KEY = 'mysecretkey123'; // In a real app, use .env

// POST /api/login - Authenticate user
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Simple hardcoded user validation
    if (email === 'user@example.com' && password === 'password123') {
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token, message: 'Login successful' });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

// GET /api/profile - Protected route
router.get('/profile', authMiddleware, (req, res) => {
    // The user is attached to the request by the middleware
    res.json({
        message: 'Welcome to your profile!',
        user: req.user
    });
});

module.exports = router;
