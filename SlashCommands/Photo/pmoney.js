const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const money = require("../../JSON/ph.json")

module.exports = {
    name: "pmoney",
    description: "random money photos",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
       let mn = money.mn[Math.floor((Math.random() * money.mn.length))];

      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Money Photos**')
      .setImage(mn);
       interaction.followUp({ embeds: [embed] })     
    },
};
