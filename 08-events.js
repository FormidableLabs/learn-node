process.stdin.resume();

process.stdin.on('data', function(chunk) {
  var str = chunk.toString();
  if (str === 'exit\n') {
    process.exit();
  } else {
    process.stdout.write(str.toUpperCase());
  }
});