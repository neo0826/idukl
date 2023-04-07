const { Snake } = require('discord-gamecord')
const { MessageEmbed } = require("discord.js") 
const { color } = require("../../config.json");

module.exports = {
  name: "snake",
  description: "snake commands with buttons",
  

  run: async (client, message, args) => {
 

new Snake({
  message: message,
  embed: {
    title: 'Snake Game',
    color: color,
    OverTitle: "Game Over",
  },
  snake: { head: '🟢', body: '🟩', tail: '🟢' },
  emojis: {
    board: '⬛', 
    food: '🍎',
    up: '⬆️', 
    right: '➡️',
    down: '⬇️',
    left: '⬅️',
  },
}).startGame()
  
        }}
