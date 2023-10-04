// tracker/src/locationGenerator.js

/**
 * Generate random latitude and longitude coordinates within specified ranges.
 * @param {number} minLat - Minimum latitude.
 * @param {number} maxLat - Maximum latitude.
 * @param {number} minLng - Minimum longitude.
 * @param {number} maxLng - Maximum longitude.
 * @returns {Object} - An object with random latitude and longitude values.
 */
function generateRandomLocation(minLat, maxLat, minLng, maxLng) {
    const randomLat = Math.random() * (maxLat - minLat) + minLat;
    const randomLng = Math.random() * (maxLng - minLng) + minLng;
    return {
        latitude: randomLat,
        longitude: randomLng,
    };
}

module.exports = {
    generateRandomLocation,
};
