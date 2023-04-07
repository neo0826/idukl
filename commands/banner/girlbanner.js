const discord = module.require("discord.js");
const girlb = require("../../JSON/bn.json")
const { color } = require("../../config.json");

module.exports = {
  name: "girlbanner",
  aliases: ["gb"],
  category: "banner",
  usage: "girlbanner",
  description: "random girl banner",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let gb = girlb.gb[Math.floor((Math.random() * girlb.gb.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Girl Banners`)
      .setImage(gb);
    message.channel.send({ embeds: [embed] });
  },
};
