const discord = module.require("discord.js");
const animal = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "animal",
  aliases: ["pzoo"],
  category: "photo",
  usage: "panimal",
  description: "random animal photos",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
     let an = animal.an[Math.floor((Math.random() * animal.an.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Random Animal Avatars`)
      .setImage(an);
    message.channel.send({ embeds: [embed] });
  },
};
