const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const kurdish = require("../../JSON/tx.json")

module.exports = {
    name: "textkurdish",
    aliases: ["textKurdish", "tk"],
    description: "random kurdish text",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
       let kr = kurdish.kr[Math.floor((Math.random() * kurdish.kr.length))];

       interaction.followUp({ content: `${kr}` });   
    },
};
