const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const emoji = require("../../JSON/ph.json")

module.exports = {
    name: "pemoji",
    description: "random emoji photos",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
       let emo = emoji.emo[Math.floor((Math.random() * emoji.emo.length))];
      
      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Emoji Photos**')
      .setImage(emo);
       interaction.followUp({ embeds: [embed] })     
    },
};
