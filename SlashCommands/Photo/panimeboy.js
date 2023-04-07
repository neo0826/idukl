const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const animeb = require("../../JSON/ph.json")

module.exports = {
    name: "panimeboy",
    description: "random anime-boy photos",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
       let ab = animeb.ab[Math.floor((Math.random() * animeb.ab.length))];
    
      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Anime-Boy Photos**')
      .setImage(ab);
       interaction.followUp({ embeds: [embed] })     
    },
};
