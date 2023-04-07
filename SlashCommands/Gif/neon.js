const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const neon = require("../../JSON/gf.json")

module.exports = {
    name: "neon",
    description: "random neon gifs",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
      let ne = neon.ne[Math.floor((Math.random() * neon.ne.length))];

      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Neon Gifs**')
      .setImage(ne);
       interaction.followUp({ embeds: [embed] })     
    },
};
