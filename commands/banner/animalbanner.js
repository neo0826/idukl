const discord = module.require("discord.js");
const anibn = require("../../JSON/bn.json")
const { color } = require("../../config.json");

module.exports = {
  name: "animalbanner",
  aliases: ["ab"],
  category: "banner",
  usage: "animalbanner",
  description: "random animal banner",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let ab = anibn.ab[Math.floor((Math.random() * anibn.ab.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Animal Banners`)
      .setImage(ab);
    message.channel.send({ embeds: [embed] });
  },
};
