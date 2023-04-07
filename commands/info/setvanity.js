const { Message, Client } = require("discord.js");

module.exports = {
    name: "setvanity",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`Successfully set vanity`);
    },
};
