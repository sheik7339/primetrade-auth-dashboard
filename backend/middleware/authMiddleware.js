const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mysecretkey123'; // Same key as in auth.js

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // check for "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // Attach user payload to request
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token.' });
    }
};

module.exports = authMiddleware;
