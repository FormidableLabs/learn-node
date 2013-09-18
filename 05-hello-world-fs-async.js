var fs = require('fs');
fs.writeFile('hello-world.txt', 'Hello World', function (err) {
  if (err) {
    throw err;
  } else {
    console.log('It\'s saved!');
  }
});