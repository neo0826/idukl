const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const baby = require("../../JSON/ph.json")

module.exports = {
    name: "pbaby",
    description: "random baby photos",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
       let bb = baby.bb[Math.floor((Math.random() * baby.bb.length))];
      
      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Baby Photos**')
      .setImage(bb);
       interaction.followUp({ embeds: [embed] })     
    },
};
