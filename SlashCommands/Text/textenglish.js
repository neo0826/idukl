const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const english = require("../../JSON/tx.json")

module.exports = {
   name: "textenglish",
   aliases: ["textEnglish", "te", "ten"],
    description: "random english text",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
       let en = english.en[Math.floor((Math.random() * english.en.length))];  
       
       interaction.followUp({ content: `${en}` });   
    },
};
