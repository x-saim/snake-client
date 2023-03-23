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

  return conn;
};


console.log("Connection ...");
connect();