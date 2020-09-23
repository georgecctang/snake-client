
const { connect } = require('./client');

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("Disconnecting from game server...");
    process.exit();  
  }
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
}

// const stdin = process.stdin;
// stdin.setRawMode(true);
// stdin.setEncoding('utf8');

connect();
setupInput();