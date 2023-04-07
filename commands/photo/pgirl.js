const discord = module.require("discord.js");
const girl = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "pgirl",
  aliases: ["pwoman"],
  category: "photo",
  usage: "pgirl",
  description: "random girl photos",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
let gl = girl.gl[Math.floor((Math.random() * girl.gl.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Girl Photoa`)
      .setImage(gl);
    message.channel.send({ embeds: [embed] });
  },
};
