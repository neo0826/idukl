const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const spanish = require("../../JSON/tx.json")

module.exports = {
    name: "textspanish",
    aliases: ["TextSpanish", "Textspain", "TEXTSPAIN", "ts", "tsp"],
    description: "random spanish text",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
        let sp = spanish.sp[Math.floor((Math.random() * spanish.sp.length))];
 
       interaction.followUp({ content: `${sp}` });   
    },
};
