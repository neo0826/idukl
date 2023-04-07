const discord = module.require("discord.js");
const emoji = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "pemoji",
  aliases: ["pemote"],
  category: "photo",
  usage: "pemoji",
  description: "random emoji photos",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let emo = emoji.emo[Math.floor((Math.random() * emoji.emo.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Emoji Photoa`)
      .setImage(emo);
    message.channel.send({ embeds: [embed] });
  },
};
