// tracker/src/index.js

const validator = require('./validator');
const provider = require('./provider');
const { generateRandomLocation } = require('./locationGenerator'); // Import the random location generator

module.exports = {
  isValidPhoneNumber: validator.isValidPhoneNumber,
  getServiceProvider: provider.getServiceProvider,
  generateRandomLocation: generateRandomLocation, // Export the random location generator
};