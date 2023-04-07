const discord = module.require("discord.js");
const monb = require("../../JSON/bn.json")
const { color } = require("../../config.json");

module.exports = {
  name: "animebanner",
  aliases: ["anb"],
  category: "banner",
  usage: "animebanner",
  description: "random anime banner",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let mb = monb.mb[Math.floor((Math.random() * monb.mb.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Anime Banners`)
      .setImage(mb);
    message.channel.send({ embeds: [embed] });
  },
};
