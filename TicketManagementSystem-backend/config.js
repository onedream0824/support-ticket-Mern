require('dotenv').config();

const config = {
  mongoURI: process.env.MONGO_URI,
  // other configurations...
};

module.exports = config;