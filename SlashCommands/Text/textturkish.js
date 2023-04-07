const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const turkish = require("../../JSON/tx.json")

module.exports = {
    name: "textturkish",
    aliases: ["TextArabic", "Textarabic", "TEXTARABIC", "tt", "tr"],
    description: "random turkish text",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
        let tr = turkish.tr[Math.floor((Math.random() * turkish.tr.length))];
      
       interaction.followUp({ content: `${tr}` });   
    },
};
