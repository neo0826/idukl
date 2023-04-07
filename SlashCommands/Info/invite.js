const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: "invite",
    description: "Need Links?",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      

      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('Hey :wave: I\'m glad To see you\'re checking my links!')
      .addField("Invite The Me:", `[Click Here](https://discord.com/api/oauth2/authorize?client_id=800442243697213442&permissions=140089149494&scope=bot%20applications.commands)`)
      .addField("Support Server:", `[Click Here](https://discord.gg/nqsFVcGBJN)`)
     interaction.followUp({ embeds: [embed] })     
    },
};
