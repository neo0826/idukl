module.exports = {
	name: 'trivia',
  description: "First one to shoot wins!",
	aliases: ['tri'],
	run: async (client, message, args) => {
const { Trivia } = require('discord-gamecord')
const { MessageEmbed } = require("discord.js") 
const { color } = require("../../config.json");

new Trivia({
  message: message,
  slash_command: false,
  embed: {
    title: 'Trivia',
    description: 'You have {time} seconds to respond!',
    color: color,
  },
  difficulty: 'medium',
  winMessage: 'GG, Your answer was correct! It was **{answer}**',
  loseMessage: 'Your answer was Incorrect! The correct answer was **{answer}**',
  othersMessage: 'You are not allowed to use buttons for this message!',
}).startGame();

        } 
 }
