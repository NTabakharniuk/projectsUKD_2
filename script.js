// // 1
// const fs = require('fs');
// const crypto = require('crypto');

// function encryptFile(inputFile, outputFile, key) {
//   const data = fs.readFileSync(inputFile, 'utf-8');
  
//   // Ініціалізуємо алгоритм шифрування AES з використанням ключа
//   const cipher = crypto.createCipher('aes-256-cbc', key);
  
//   // Шифруємо дані та записуємо зашифрований текст у вихідний файл
//   let encryptedData = cipher.update(data, 'utf-8', 'hex');
//   encryptedData += cipher.final('hex');
//   fs.writeFileSync(outputFile, encryptedData, 'utf-8');
  
//   console.log('Файл успішно зашифровано!');
// }

// // Приклад виклику функції
// encryptFile('input.txt', 'output.txt', 'my-secret-key');


// // 2
// const fs = require('fs');
// const crypto = require('crypto');

// function decryptFile(inputFile, outputFile, key) {
//   const data = fs.readFileSync(inputFile, 'utf-8');
  
//   // Ініціалізуємо алгоритм розшифрування AES з використанням ключа
//   const decipher = crypto.createDecipher('aes-256-cbc', key);
  
//   // Розшифровуємо дані та записуємо дешифрований текст у вихідний файл
//   let decryptedData = decipher.update(data, 'hex', 'utf-8');
//   decryptedData += decipher.final('utf-8');
//   fs.writeFileSync(outputFile, decryptedData, 'utf-8');
  
//   console.log('Файл успішно розшифровано!');
// }

// // Приклад виклику функції
// decryptFile('encrypted.txt', 'decrypted.txt', 'my-secret-key');


// // 3
// const fs = require('fs');
// const crypto = require('crypto');

// function encryptFile(inputFile, key) {
//   const inputFileContent = fs.readFileSync(inputFile);
//   const iv = crypto.randomBytes(16); // Генеруємо випадковий вектор ініціалізації
//   const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
//   let encrypted = cipher.update(inputFileContent);
//   encrypted = Buffer.concat([encrypted, cipher.final()]);
//   const outputFileName = `${inputFile}.enc`;
//   fs.writeFileSync(outputFileName, Buffer.concat([iv, encrypted])); // Зберігаємо зашифрований вміст файлу
//   console.log(`The file ${inputFile} was successfully encrypted and saved as ${outputFileName}.`);
// }

// const inputFile = 'input.txt';
// const key = 'mySecretKey'; // Ключ шифрування
// encryptFile(inputFile, key);


//4
const fs = require('fs');
const crypto = require('crypto');

function decryptFile(inputFile, key) {
  const inputFileContent = fs.readFileSync(inputFile);
  const iv = inputFileContent.slice(0, 16); // Отримуємо вектор ініціалізації з файлу
  const encrypted = inputFileContent.slice(16); // Отримуємо зашифрований вміст файлу з файлу
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  const outputFileName = `${inputFile.slice(0, -4)}.txt`;
  fs.writeFileSync(outputFileName, decrypted); // Зберігаємо розшифрований вміст файлу
  console.log(`The file ${inputFile} was successfully decrypted and saved as ${outputFileName}.`);
}

const inputFile = 'input.enc';
const key = 'mySecretKey'; // Ключ шифрування
decryptFile(inputFile, key);
