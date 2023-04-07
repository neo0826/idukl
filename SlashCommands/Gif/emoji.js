const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const emoji = require("../../JSON/gf.json")

module.exports = {
    name: "emoji",
    description: "random emoji gifs",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
      let em = emoji.em[Math.floor((Math.random() * emoji.em.length))];

      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Emoji Gifs**')
      .setImage(em);
       interaction.followUp({ embeds: [embed] })     
    },
};
