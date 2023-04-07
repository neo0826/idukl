const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const boy = require("../../JSON/ph.json")

module.exports = {
    name: "pboy",
    description: "random boy photos",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
       let bo = boy.bo[Math.floor((Math.random() * boy.bo.length))];
      
      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Boy Photos**')
      .setImage(bo);
       interaction.followUp({ embeds: [embed] })     
    },
};
