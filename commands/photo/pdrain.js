const discord = module.require("discord.js");
const drain = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "pdrain",
  aliases: ["pdrains"],
  category: "photo",
  usage: "pdrain",
  description: "random drain photos",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let dr = drain.dr[Math.floor((Math.random() * drain.dr.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Drain Photoa`)
      .setImage(dr);
    message.channel.send({ embeds: [embed] });
  },
};
