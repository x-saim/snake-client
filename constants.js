// server info
const IP = "172.26.65.40"; //update based on server connection information.
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