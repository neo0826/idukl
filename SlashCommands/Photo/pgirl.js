const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const girl = require("../../JSON/ph.json")

module.exports = {
    name: "pgirl",
    description: "random girl photos",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
      let gl = girl.gl[Math.floor((Math.random() * girl.gl.length))];
      
      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Girl Photos**')
      .setImage(gl);
       interaction.followUp({ embeds: [embed] })     
    },
};
