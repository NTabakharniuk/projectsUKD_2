//1) Написати функцію, яка буде читати вміст файлу на диску і виводити його значення на екран

const fs = require('fs');

function readFile(filePath) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}

readFile('text.txt');



//2)Написати функцію яка буде створювати файл на диску з певним контентом

const fs = require('fs');

function createFile(filePath, content) {
  fs.writeFile(filePath, content, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`File ${filePath} has been created.`);
    }
  });
}
 
createFile('text.txt', 'Hello, world!');



//3)Написати функцію, яка буде додавати вміст до раніше створеного файлу

const fs = require('fs');

function appendToFile(filePath, content) {
  fs.appendFile(filePath, content, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`Content has been added to file ${filePath}.`);
    }
  });
}

appendToFile('text.txt', 'This is new content!');



//4)Створити функцію, яка буде видаляти файл з диску, якщо він існує. Якщо файл не існує, то така помилка має бути оброблена використовуючи конструкцію try ... catch.

const fs = require('fs');

function deleteFileIfExists(filePath) {
  try {
    fs.unlinkSync(filePath);
    console.log(`File ${filePath} has been deleted.`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`File ${filePath} does not exist.`);
    } else {
      console.error(err);
    }
  }
}

deleteFileIfExists('text.txt');



//5)Написати функцію, за допомогою якої можна перенести файл з однієї папки на диску в іншу.

const fs = require('fs');

function moveFile(sourcePath, destinationPath, callback) {
  fs.rename(sourcePath, destinationPath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File ${sourcePath} has been moved to ${destinationPath}.`);
    if (callback) {
      callback();
    }
  });
}

moveFile('path/to/source/text.txt', 'path/to/destination/text.txt');


