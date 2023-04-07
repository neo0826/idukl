const { Client, CommandInteraction } = require("discord.js");
const { Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: "help",
    description: "Feeling Lost?",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      

      let embed = new MessageEmbed()
      .setColor("BLUE")
      .setDescription('**Use Slash Only**')   
      .addField("Utility:", `help, invite, ping, serverinfo, userinfo`)
      .addField("Gif:", `anime, animeboy, animal, emoji, couple, boy, girl, sad, neon, smoking`)
      .addField("Photos:", `panimal, pbaby, pboy, pemoji, pgirl, panimeboy, pdrain, pcar, pmoney`)
      .addField("Text:", `textarabic, textenglish, textkurdish, textpersian, textturkish, textspanish, textitalian\n**Aliases:** ta, te, tk, tp, tr, ts, ti`);
       interaction.followUp({ embeds: [embed] })     
    },
};
