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

  conn.on("connect",() => {
    console.log("Successfully connected to game server:");
    conn.write("Name: ABC");
  });
  
  return conn;
};

module.exports = {
  connect //ES6 shorthand syntax.
};
