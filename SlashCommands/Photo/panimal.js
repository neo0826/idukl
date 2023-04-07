const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const animal = require("../../JSON/ph.json")

module.exports = {
    name: "panimal",
    description: "random animal photos",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
      let an = animal.an[Math.floor((Math.random() * animal.an.length))];

      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Animal Photos**')
      .setImage(an);
       interaction.followUp({ embeds: [embed] })     
    },
};
