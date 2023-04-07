const { Message, Client } = require("discord.js");

module.exports = {
    name: "setvanityy",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`<@${message.author.id}>, Thanks For adding vanity in your status`);
    },
};
