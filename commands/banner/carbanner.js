const discord = module.require("discord.js");
const cab = require("../../JSON/bn.json")
const { color } = require("../../config.json");

module.exports = {
  name: "carbanner",
  aliases: ["cb"],
  category: "banner",
  usage: "carbanner",
  description: "random car banner",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let cb = cab.cb[Math.floor((Math.random() * cab.cb.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Car Banners`)
      .setImage(cb);
    message.channel.send({ embeds: [embed] });
  },
};
