// tracker/src/validator.js

/**
 * Check if a phone number is valid.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} - True if the phone number is valid, false otherwise.
 */
function isValidPhoneNumber(phoneNumber) {
    // Your validation logic here
    // For a simplified example, we'll check if the input is a 10-digit number
    return /^\d{10}$/.test(phoneNumber);
}

module.exports = {
    isValidPhoneNumber,
};
