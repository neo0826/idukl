const discord = module.require("discord.js");
const aesb = require("../../JSON/bn.json")
const { color } = require("../../config.json");

module.exports = {
  name: "aestheticbanner",
  aliases: ["asb"],
  category: "banner",
  usage: "aestheticbanner",
  description: "random aesthetic banner",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let as = aesb.as[Math.floor((Math.random() * aesb.as.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Aesthetic Banners`)
      .setImage(as);
    message.channel.send({ embeds: [embed] });
  },
};
