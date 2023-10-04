#!/usr/bin/env node

const program = require('commander');
const phoneTracker = require('../src/index');

program
  .version('1.0.0')
  .description('Phone Tracker CLI')
  .option('-v, --validate <number>', 'Validate a phone number')
  .option('-s, --service-provider <countryCode>', 'Get service provider for a country code')
  .option('-c, --coordinates', 'Generate coordinates')
  .parse(process.argv);

if (program.validate) {
  const isValid = phoneTracker.isValidPhoneNumber(program.validate);
  console.log(`Is Valid: ${isValid}`);
}

if (program.serviceProvider) {
  const serviceProvider = phoneTracker.getServiceProvider(program.serviceProvider);
  console.log(`Service Provider: ${serviceProvider}`);
}

if (program.coordinates) {
  const randomLocation = phoneTracker.generateRandomLocation(-90, 90, -180, 180);
  console.log(`Latitude: ${randomLocation.latitude}`);
  console.log(`Longitude: ${randomLocation.longitude}`);
}