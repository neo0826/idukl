const discord = module.require("discord.js");
const boyb = require("../../JSON/bn.json")
const { color } = require("../../config.json");

module.exports = {
  name: "boybanner",
  aliases: ["bb"],
  category: "banner",
  usage: "boybanner",
  description: "random boy banner",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let bb = boyb.bb[Math.floor((Math.random() * boyb.bb.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Boy Banners`)
      .setImage(bb);
    message.channel.send({ embeds: [embed] });
  },
};
