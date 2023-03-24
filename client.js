const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "172.29.217.100",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(`The server says: ${data}`);
  });

  conn.on("connect",() => { //message to server upon connection.
    console.log("Successfully connected to game server:");
    conn.write("Name: ABC");
    
  });

  conn.on("connect",() => { //movement block.
    conn.write("Move: up");
  });


  
  return conn;
};

module.exports = {
  connect //ES6 shorthand syntax.
};

/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/