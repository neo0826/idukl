const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const italian = require("../../JSON/tx.json")

module.exports = {
   name: "textitalian",
   aliases: ["TextItalian", "Textitaly", "TEXTITALI", "ti", "til"],
    description: "random italian text",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
        let it = italian.it[Math.floor((Math.random() * italian.it.length))];

       interaction.followUp({ content: `${it}` });   
    },
};
