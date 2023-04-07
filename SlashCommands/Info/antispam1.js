const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: "anti-spam on",
    description: "oned!",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
    interaction.followUp({ content: `🟢 | Now Anti-Spam Status Is: \`ON\`` })     
    },
};
