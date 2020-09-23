const { read } = require('fs');
const net = require('net');
const { IP, PORT, NAME } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {

  
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write(NAME);
  });

  // log messsage from server
  conn.on('data', (data) =>{
    console.log(data);
  });


  return conn;
}

module.exports = { connect };