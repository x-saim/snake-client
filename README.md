# 🐍 Snake Client Project 🐍

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre. It is a terminal-based Snake implementation written in JavaScript (Node.js).

Before you can run this client, you will need to be running the server side which you can download and install from here. 



## Final Product

---

### View of connection screen:

!["Connection Screen"](https://i.imgur.com/emhUS7y.png)

### Sending "Hello" to the server:

!["Messaage: Hello"](https://i.imgur.com/Iygi4p2.png)

### Sending "Good Game!" to the server:

!["Messaage: Good Game!"](https://i.imgur.com/7yB4SGg.png)


## Getting Started

---

- Follow steps inside the [snek server repo](https://github.com/lighthouse-labs/snek-multiplayer) to run the server side.
- Run the development snake client using the `node play.js` command.

## Instructions

---

### *Movement Commands:*

Use W A S D to navigate the snake up, down, left, or right. Eat the red dot to gain points. If the snake collides with the wall or its own tail, it's game over. Press CTRL + C to quit the game.

- Press W to "Move: up" - move up one square (unless facing down)
- Press S to "Move: down" - move down one square (unless facing up)
- Press A to "Move: left" - move left one square (unless facing right)
- Press D to "Move: right" - move left one square (unless facing left)

### *Sending Default Messages:*

- Press T to say Hello
- Press Y to say Goodbye!
- Press U to say Good Game!


## Acknowledgements
---
This project was not built from scratch. It was inspired and started from snek (blog post). [Tania Rascia](https://github.com/taniarascia) is the original author.

## License
---
This project is open source and available under the [MIT License](https://github.com/taniarascia/snek/blob/master/LICENSE).