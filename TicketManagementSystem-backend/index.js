const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());

// Routes
app.use(require('./routes/authRoutes'));
app.use(require('./routes/tickets'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});