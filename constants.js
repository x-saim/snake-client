// server info
const IP = "localhost";
const PORT = 50541;

//movement keys object
const movementObj = {
  MOVE_UP_KEY: "w",
  MOVE_LEFT_KEY:"a",
  MOVE_DOWN_KEY:"s",
  MOVE_RIGHT_KEY:"d"
};

//generic chat messages object
const chatMsg = {
  sayHello: "t",
  sayGoodbye:"y",
  sayGoodGame: "u"
};

module.exports = {
  IP,
  PORT,
  movementObj,
  chatMsg,
};