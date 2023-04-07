const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const axios = require("axios");

module.exports = {
    name: "boy",
    description: "random boy gifs",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
  axios.get("https://api.roxza.me/v1/random?type=man")
     .then(res => {
      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Boy/Man Gifs**')
      .setImage(res.data.url);
       interaction.followUp({ embeds: [embed] })     
       })
    },
};
