const discord = module.require("discord.js");
const arabic   = require("../../JSON/tx.json")
const { color } = require("../../config.json");

module.exports = {
  name: "textarabic",
  aliases: ["textArabic", "ta", "tar"],
  category: "text",
  usage: "textarabic",
  description: "random arabic text",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let ar = arabic.ar[Math.floor((Math.random() * arabic.ar.length))];
 
    message.channel.send({ content: `${ar}` });
  },
};
