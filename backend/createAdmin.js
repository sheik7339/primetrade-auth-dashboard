
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const connectDB = require('./db');

const createAdminUser = async () => {
    try {
        await connectDB();

        const email = 'admin@primetrade.com';
        const password = 'admin123';
        const saltRounds = 10;

        // Check if user exists first to avoid duplicates (although unique index handles this)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('Admin user already exists');
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            name: 'Admin User',
            email,
            password: hashedPassword
        });

        await newUser.save();

        console.log('Admin user created successfully');
        console.log('Email:', email);
        console.log('Password:', password);
        
        process.exit(0);
    } catch (error) {
        console.error('Error creating admin user:', error);
        process.exit(1);
    }
};

createAdminUser();
