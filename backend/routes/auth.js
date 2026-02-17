const express = require('express');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const SECRET_KEY = 'mysecretkey123'; // In a real app, use .env

const bcrypt = require('bcryptjs');
const User = require('../models/User');

// POST /api/login - Authenticate user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Check in Database (Priority)
        const user = await User.findOne({ email });
        
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY, { expiresIn: '1h' });
                return res.json({ token, message: 'Login successful', user: { name: user.name, email: user.email } });
            }
        }

        // 2. Fallback to Hardcoded User (Legacy Support)
        if (email === 'user@example.com' && password === 'password123') {
            const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
            return res.json({ token, message: 'Login successful' });
        }

        return res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
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
