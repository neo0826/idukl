const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const axios = require("axios");

module.exports = {
    name: "girl",
    description: "random girl gifs",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
  axios.get("https://api.roxza.me/v1/random?type=woman")
     .then(res => {
      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Girl/Woman Gifs**')
      .setImage(res.data.url);
       interaction.followUp({ embeds: [embed] })     
       })
    },
};
