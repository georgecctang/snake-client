const { UP, DOWN, LEFT, RIGHT, SAY } = require('./constants');

// Stores the active TCP connection object

let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("Disconnecting from game server...");
    process.exit();  
  }
  if (key === 'w') {
    connection.write(UP);
  }
  if (key === 'a') {
    connection.write(LEFT);
  }
  if (key === 's') {
    connection.write(DOWN);
  }
  if (key === 'd') {
    connection.write(RIGHT);
  }
  // Display custom message to other players
  if (key === 'q') {
    connection.write(SAY);
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
}

module.exports = { setupInput };