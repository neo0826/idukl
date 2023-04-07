const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const sad = require("../../JSON/gf.json")

module.exports = {
    name: "sad",
    description: "random sad gifs",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
      let sa = sad.sa[Math.floor((Math.random() * sad.sa.length))];

      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Sad Gifs**')
      .setImage(sa);
       interaction.followUp({ embeds: [embed] })     
    },
};
