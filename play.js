const {connect} = require("./client.js"); //ES6 shorthand syntax.

console.log("Connection ...");

// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = () => {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      process.stdout.write('.');
    });
  };

  stdin.on("data",handleUserInput);

  return stdin;
};


connect();
setupInput();