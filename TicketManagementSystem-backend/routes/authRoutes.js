//routes/authRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

require('dotenv').config();

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    // Extract user data from request body
    const { email, username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = new User({
      email,
      name: username,
      password: hashedPassword,
    });
    console.log('User Created during Signup:', newUser);

    await newUser.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    // Extract user data from request body
    const { email, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ email });
    console.log('User Found during Login:', user);

    // Check if the user exists and verify the password
    if (user && (await bcrypt.compare(password, user.password))) {
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour
      });

      res.json({ token,role: user.role});
    } else {

      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

module.exports = router;
