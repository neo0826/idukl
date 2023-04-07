const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const arabic = require("../../JSON/tx.json")

module.exports = {
   name: "textarabic",
   aliases: ["textArabic", "ta", "tar"],
    description: "random arabic text",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
       let ar = arabic.ar[Math.floor((Math.random() * arabic.ar.length))];

       interaction.followUp({ content: `${ar}` });   
    },
};
