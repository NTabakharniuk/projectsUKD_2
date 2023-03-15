// Library -----------------------
require("pidcrypt/seedrandom")  
var pidCrypt = require("pidcrypt")

require("pidcrypt/aes_cbc")
var aes = new pidCrypt.AES.CBC();

const fs = require('fs');
// -------------------------------


var enterPassword = process.argv[2]; // Enter password


var crypted = aes.encryptText("ukdPass"); // Encrypted password

function createFile(filePath, fileContent) {

    fs.writeFile(filePath, fileContent, () => {
        console.log(`Файл "${filePath}" був створений з певним контентом: "${fileContent}"`)
    });
}

function readFile(filePath) {

    var decrypted = aes.decryptText(crypted);

    fs.readFile(filePath, 'utf8', (err) => {
        if (err) {
            console.error(err);
        } else {
            decrypted == enterPassword ? console.log('Password is correct') : console.log('Incorrect password')
        }
  });
}

createFile('new.txt', crypted); // Creating a text document
readFile('new.txt'); // reading a file
