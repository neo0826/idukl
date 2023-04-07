const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const anim = require("../../JSON/gf.json")

module.exports = {
    name: "animeboy",
    description: "random anime-boy gifs",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
      let ag = anim.ag[Math.floor((Math.random() * anim.ag.length))];

      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Anime Boy Gifs**')
      .setImage(ag);
       interaction.followUp({ embeds: [embed] })     
    },
};
