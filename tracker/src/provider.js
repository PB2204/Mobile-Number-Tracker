// tracker/src/provider.js

// Sample service provider data (for demonstration purposes)
const serviceProviders = {
    '+1': 'AT&T',
    '+44': 'Vodafone UK',
    '+91': 'Airtel',
    '+33': 'Orange France',
    '+49': 'Telekom Deutschland',
    '+61': 'Telstra Australia',
    '+81': 'NTT DOCOMO',
    '+82': 'SK Telecom',
    '+86': 'China Mobile',
    '+90': 'Turkcell',
    '+92': 'Jazz Pakistan',
    '+234': 'MTN Nigeria',
    '+254': 'Safaricom Kenya',
    '+966': 'STC Saudi Arabia',
    '+971': 'Etisalat UAE',
    '+92': 'Telenor Pakistan',
    '+93': 'Roshan Afghanistan',
    '+355': 'Vodafone Albania',
    '+375': 'MTS Belarus',
    '+598': 'Antel Uruguay',
    // Add more service providers and country codes here
};

/**
 * Get the service provider for a given country code.
 * @param {string} countryCode - The country code (e.g., '+1', '+44').
 * @returns {string} - The service provider name or 'Unknown Service Provider'.
 */
function getServiceProvider(countryCode) {
    return serviceProviders[countryCode] || 'Unknown Service Provider';
}

module.exports = {
    getServiceProvider,
};