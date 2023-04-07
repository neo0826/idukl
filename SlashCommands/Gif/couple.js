const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const couple = require("../../JSON/gf.json")

module.exports = {
    name: "couple",
    description: "random couple gifs",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
      let cp = couple.cp[Math.floor((Math.random() * couple.cp.length))];

      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Couple Gifs**')
      .setImage(cp);
       interaction.followUp({ embeds: [embed] })     
    },
};
