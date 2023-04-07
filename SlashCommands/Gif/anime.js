const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const axios = require("axios");

module.exports = {
    name: "anime",
    description: "random anime gifs",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
  axios.get("https://api.roxza.me/v1/random?type=anime")
     .then(res => {
      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Anime Gifs**')
      .setImage(res.data.url);
       interaction.followUp({ embeds: [embed] })     
       })
    },
};
