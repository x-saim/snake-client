// setup user movement handler
const handleMoves = () => {
  const stdin = process.stdin;
  stdin.on("data", (key) => {
    if (key === 'w') {
      process.stdout.write('Move: up');
    } else if (key === 'a') {
      process.stdout.write('Move: left');
    } else if (key === 's') {
      process.stdout.write('Move: down');
    } else if (key === 'd') {
      process.stdout.write('Move: right');
    }
  });
 
};

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

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data",handleUserInput);

  return stdin;
};

module.exports = { //ES6 shorthand syntax.
  setupInput,
  handleMoves
};