

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
