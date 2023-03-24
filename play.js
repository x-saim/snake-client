const { connect } = require("./client.js"); //ES6 shorthand syntax.
const { setupInput, handleMoves} = require("./input");
console.log("Connection ...");

setupInput(connect());
handleMoves();