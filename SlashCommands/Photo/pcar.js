const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')
const car = require("../../JSON/ph.json")

module.exports = {
    name: "pcar",
    description: "random car photos",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
        let cr = car.cr[Math.floor((Math.random() * car.cr.length))];
      
      let embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription('**Car Photos**')
      .setImage(cr);
       interaction.followUp({ embeds: [embed] })     
    },
};
