const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(`The server says: ${data}`);
  });

  conn.on("connect", () => { //message to server upon connection.
    console.log("Successfully connected to game server:");
    conn.write("Name: SA");
  });

  return conn;
};

module.exports = {
  connect //ES6 shorthand syntax.
};