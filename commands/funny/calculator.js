const { Message, Client } = require("discord.js");
const simplydjs = require('simply-djs')
const { color } = require("../../config.json");

module.exports = {
    name: "calculator",
    aliases: ['cal'],
    permissions : [""],
    category: "Utility",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        simplydjs.calculator(message, {
            embedColor: color,
        })
    },
};
