// tracker/src/provider.js

// Sample service provider data (for demonstration purposes)
const serviceProviders = {
  "+1": "AT&T",
  "+44": "Vodafone UK",
  "+91": "Airtel",
  "+33": "Orange France",
  "+49": "Telekom Deutschland",
  "+61": "Telstra Australia",
  "+81": "NTT DOCOMO",
  "+82": "SK Telecom",
  "+86": "China Mobile",
  "+90": "Turkcell",
  "+92": "Jazz Pakistan",
  "+234": "MTN Nigeria",
  "+254": "Safaricom Kenya",
  "+966": "STC Saudi Arabia",
  "+971": "Etisalat UAE",
  "+93": "Roshan Afghanistan",
  "+355": "Vodafone Albania",
  "+375": "MTS Belarus",
  "+598": "Antel Uruguay",
  "+52": "Telcel Mexico",
  "+55": "Vivo Brazil",
  "+356": "GO Malta",
  "+977": "Nepal Telecom",
  "+81": "SoftBank Japan",
  "+82": "KT Corporation South Korea",
  "+852": "HKT Hong Kong",
  "+886": "Chunghwa Telecom Taiwan",
  "+94": "Dialog Axiata Sri Lanka",
  "+880": "Grameenphone Bangladesh",
  "+93": "Roshan Afghanistan",
  "+46": "Tele2 Sweden",
  "+30": "Cosmote Greece",
  "+7": "MTS Russia",
  "+65": "Singtel Singapore",
  "+46": "Telia Sweden",
  "+34": "Movistar Spain",
  "+351": "Vodafone Portugal",
  "+39": "TIM Italy",
  "+27": "Vodacom South Africa",
  "+20": "Orange Egypt",
  "+962": "Zain Jordan",
  "+503": "Claro El Salvador",
  "+506": "Kölbi Costa Rica",
  "+54": "Claro Argentina",
  "+598": "Movistar Uruguay",
  "+52": "Movistar Mexico",
  "+57": "Claro Colombia",
  // Add more service providers and country codes here
};

/**
 * Get the service provider for a given country code.
 * @param {string} countryCode - The country code (e.g., '+1', '+44').
 * @returns {string} - The service provider name or 'Unknown Service Provider'.
 */
function getServiceProvider(countryCode) {
  return serviceProviders[countryCode] || "Unknown Service Provider";
}

module.exports = {
  getServiceProvider,
};
