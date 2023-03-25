const { movementObj,chatMsg } = require("./constants");

// Stores the active TCP connection object.
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

// setup user movement handler
const handleMoves = (key) => {
  if (key === movementObj["MOVE_UP_KEY"]) {
    connection.write('Move: up');
  } else if (key === movementObj["MOVE_LEFT_KEY"]) {
    connection.write('Move: left');
  } else if (key === movementObj["MOVE_DOWN_KEY"]) {
    connection.write('Move: down');
  } else if (key === movementObj["MOVE_RIGHT_KEY"]) {
    connection.write('Move: right');
  }
};

// function handles canned messages sent to server by client.
const handleChat = (key) => {
  if (key === chatMsg["sayHello"]) {
    connection.write("Say: Hello");
  } else if (key === chatMsg["sayGoodbye"]) {
    connection.write("Say: Goodbye!");
  } else if (key === chatMsg["sayGoodGame"]) {
    connection.write("Say: Good game!");
  }
  
};

//accepts object to let us interact with server.
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
   
  stdin.on("data",handleUserInput); //hanldes CTRL + C or program termination.
  stdin.on("data",handleMoves); //handles WASD movement.
  stdin.on("data",handleChat); //server response to client sending canned messages.

  return stdin;
};

module.exports = { //ES6 shorthand syntax.
  setupInput,
};

//if (key.startsWith("Say: ")) {//4 indices
//   const chat = input.slice(4);
//   connection.write(`Say: ${chat.slice(0, 20)}`);