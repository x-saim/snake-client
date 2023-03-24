let connection;

// setup interface to handle user input from stdin
const handleUserInput = () => {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    process.stdout.write('.');
  });
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {          // setup user movement handler
    if (key === 'w') {
      connection.write('Move: up');
    } else if (key === 'a') {
      connection.write('Move: left');
    } else if (key === 's') {
      connection.write('Move: down');
    } else if (key === 'd') {
      connection.write('Move: right');
    }
  });

  stdin.on("data",handleUserInput);
  return stdin;
};

module.exports = { //ES6 shorthand syntax.
  setupInput,
};