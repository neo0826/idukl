const discord = module.require("discord.js");
const money = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "pmoney",
  aliases: ["pmn"],
  category: "photo",
  usage: "pmoney",
  description: "random money photos",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
   let mn = money.mn[Math.floor((Math.random() * money.mn.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Money Photoa`)
      .setImage(mn);
    message.channel.send({ embeds: [embed] });
  },
};
