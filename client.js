const { read } = require('fs');
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {

  console.log('Connecting ...');
  
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write("Name: GEO");
  });

  // log messsage from server
  conn.on('data', (data) =>{
    console.log(data);
  });


  return conn;
}

module.exports = { connect };