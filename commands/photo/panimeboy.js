const discord = module.require("discord.js");
const animeb = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "animeboy",
  aliases: ["pab"],
  category: "photo",
  usage: "panimeboy",
  description: "random animeboy photos",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let ab = animeb.ab[Math.floor((Math.random() * animeb.ab.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Random Anime-Boy Avatars`)
      .setImage(ab);
    message.channel.send({ embeds: [embed] });
  },
};
