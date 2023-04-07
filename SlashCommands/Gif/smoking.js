const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const smo = require("../../JSON/gf.json")

module.exports = {
    name: "smoking",
    description: "random smoking gifs",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
      let sm = smo.sm[Math.floor((Math.random() * smo.sm.length))];

      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Smoking Gifs**')
      .setImage(sm);
       interaction.followUp({ embeds: [embed] })     
    },
};
