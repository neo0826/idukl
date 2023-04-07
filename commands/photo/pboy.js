const discord = module.require("discord.js");
const boy = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "pboy",
  aliases: ["pman"],
  category: "photo",
  usage: "pboy",
  description: "random boy photos",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
  let bo = boy.bo[Math.floor((Math.random() * boy.bo.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Boy Photos`)
      .setImage(bo);
    message.channel.send({ embeds: [embed] });
  },
};
