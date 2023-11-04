

// module2.js
const generateRandomMacAddress = () => {
  const macBytes = Array.from({ length: 6 }, () => Math.floor(Math.random() * 256));
  const macAddress = macBytes.map(byte => byte.toString(16).padStart(2, '0')).join(':');
  return macAddress;
};

module.exports = { generateRandomMacAddress };
