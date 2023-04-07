const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const drain = require("../../JSON/ph.json")

module.exports = {
    name: "pdrain",
    description: "random drain photos",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
       let dr = drain.dr[Math.floor((Math.random() * drain.dr.length))];
      
      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Drain Photos**')
      .setImage(dr);
       interaction.followUp({ embeds: [embed] })     
    },
};
