const discord = module.require("discord.js");
const car = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "pcar",
  aliases: ["pcars"],
  category: "photo",
  usage: "pcar",
  description: "random car photos",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
  let cr = car.cr[Math.floor((Math.random() * car.cr.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Car Photoa`)
      .setImage(cr);
    message.channel.send({ embeds: [embed] });
  },
};
