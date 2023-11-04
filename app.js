// app.js
const module1 = require('./name');
const module2 = require('./generateRandomMacAddress');
const module3 = require('./calculate');
const module4 = require('./sayGoodbye');

// Menggunakan module1 untuk memberi salam
module1.salam('pak somantri');

// module 2 membuat randm mac address
const randomMac = module2.generateRandomMacAddress();
console.log('Random MAC Address:', randomMac);


// Menggunakan module3 untuk menghitung luas lingkaran
const result = module3.calculate(5, 3);
console.log('Result of calculation:', result);

// Menggunakan module4 untuk menghasilkan angka acak
module4.sayGoodbye();