# Learn More About Phone Tracker CLI

Welcome to the Phone Tracker CLI project! This document provides additional information and resources to help you get the most out of this package.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
  - [Validation](#validation)
  - [Service Provider Lookup](#service-provider-lookup)
  - [Random Coordinate Generation](#random-coordinate-generation)
- [Command Line Interface (CLI)](#command-line-interface-cli)
- [License](#license)
- [Contributing](#contributing)

## Getting Started

### Installation

To start using the Phone Tracker CLI package, you need to install it globally using npm. Open your terminal and run the following command:

```bash
npm install -g mobile-number-tracker
```

This will make the `phone-tracker` command available globally.

## Usage

### Validation

You can use the package to validate phone numbers. Here's how:

```javascript
const phoneTracker = require("mobile-number-tracker");

const phoneNumber = "+19999999999";
const isValid = phoneTracker.isValidPhoneNumber(phoneNumber);
console.log(`Is Valid: ${isValid}`);
```

### Service Provider Lookup

Retrieve service provider information based on country codes:

```javascript
const phoneTracker = require("mobile-number-tracker");

const countryCode = "+1";
const serviceProvider = phoneTracker.getServiceProvider(countryCode);
console.log(`Country Code: ${countryCode}`);
console.log(`Service Provider: ${serviceProvider}`);
```

### Coordinate Generation

Generate latitude and longitude coordinates:

```javascript
const phoneTracker = require("mobile-number-tracker");

const randomLocation = phoneTracker.generateRandomLocation(-90, 90, -180, 180);
console.log(`Latitude: ${randomLocation.latitude}`);
console.log(`Longitude: ${randomLocation.longitude}`);
```

## Command Line Interface (CLI)

The Phone Tracker CLI package comes with a command-line interface (CLI) that makes it easy to access its functionalities. Here are some examples of how to use the CLI:

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

This project is licensed under the MIT License. For more details, please read the [LICENSE](LICENSE) file.

## Contributing

We welcome contributions from the community! If you'd like to contribute to the project, please read our [Contribution Guidelines](CONTRIBUTING.md) to get started.

---

Thank you for using the Phone Tracker CLI package. If you have any questions or need assistance, feel free to reach out to [Pabitra Banerjee](mailto:rockstarpabitra2204@gmail.com), the project maintainer.

## Happy Coding ! 🚀