const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const persian = require("../../JSON/tx.json")

module.exports = {
    name: "textpersian",
    aliases: ["textirani", "tp"],
    description: "random persian text",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
         
    let pr = persian.pr[Math.floor((Math.random() * persian.pr.length))];
      
       interaction.followUp({ content: `${pr}` });   
    },
};
