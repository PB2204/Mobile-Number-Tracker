# Phone Tracker CLI

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

The Phone Tracker CLI is a JavaScript package that provides a set of functionalities related to phone numbers, service provider lookup, and random location coordinate generation. It aims to simplify tasks such as phone number validation, retrieving service provider information, and generating latitude and longitude coordinates.

## Project Structure

The project is organized into the following directories and files:

```bash
tracker/
|-- bin/                            # Command Line Interface
|   |-- cli.js                      # CLI script for using the package
|-- src/
|   |-- index.js                    # Main module for the package
|   |-- validator.js                # Phone number validation functions
|   |-- provider.js                 # Service provider information
|   |-- locationGenerator.js        # Location coordinates generator
|-- CODE_OF_CONDUCT.md
|-- LEARN.md
|-- CONTRIBUTING.md
|-- package.json                    # Package configuration
|-- README.md                       # Package documentation (you are here)
|-- LICENSE                         # License file
```

## Motive of the Project

The primary goals of this project are to:

- Simplify phone number validation.
- Provide service provider lookup based on country codes.
- Generate latitude and longitude coordinates for various use cases.

## Features

- Phone number validation.
- Service provider information lookup.
- Random location coordinate generation.
- Command-line interface (CLI) for easy access to package functionality.

## Usage

### Installation

To install the Phone Tracker CLI package, use npm:

```bash
npm install -g mobile-number-tracker
```

### Examples

#### Validate a Phone Number

```javascript
const phoneTracker = require("mobile-number-tracker");

const phoneNumber = "+19999999999";
const isValid = phoneTracker.isValidPhoneNumber(phoneNumber);
console.log(`Is Valid: ${isValid}`);
```

#### Get Service Provider Information

```javascript
const phoneTracker = require("mobile-number-tracker");

const countryCode = "+1";
const serviceProvider = phoneTracker.getServiceProvider(countryCode);
console.log(`Country Code: ${countryCode}`);
console.log(`Service Provider: ${serviceProvider}`);
```

#### Generate Coordinates

```javascript
const phoneTracker = require("mobile-number-tracker");

const randomLocation = phoneTracker.generateRandomLocation(-90, 90, -180, 180);
console.log(`Latitude: ${randomLocation.latitude}`);
console.log(`Longitude: ${randomLocation.longitude}`);
```

### Command Line Interface (CLI) User Guide

The package includes a CLI for easy access to its functionalities. Here are some usage examples:

- Validate a phone number:

  ```bash
  phone-tracker -v +19999999999
  ```

- Get service provider information:

  ```bash
  phone-tracker -s +1
  ```

- Generate coordinates:

  ```bash
  phone-tracker -c
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Code of Conduct

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) to understand our community guidelines.

## Learn More

Explore the [Learn.md](Learn.md) file for additional information and resources related to this project.

## Contribution Details

We welcome contributions from the community! Please read our [Contribution Guidelines](CONTRIBUTING.md) for details on how to get started.

## Developer Details

- Project maintained by: [Pabitra Banerjee](https://pabitrabanerjee.me)
- Contact: [Pabitra Banerjee](mailto:rockstarpabitra2204@gmail.com)
- GitHub: [PB2204](https://github.com/PB2204)

## Happy Coding ! 🚀