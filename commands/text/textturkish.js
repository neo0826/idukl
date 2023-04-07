const discord = module.require("discord.js");
const turkish  = require("../../JSON/tx.json")
const { color } = require("../../config.json");

module.exports = {
  name: "textturkish",
  aliases: ["TextArabic", "Textarabic", "TEXTARABIC", "tt", "tr"],
  category: "text",
  usage: "textturkish",
  description: "random turkish text",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let tr = turkish.tr[Math.floor((Math.random() * turkish.tr.length))];
    
    message.channel.send({ content: `${tr}` });
  },
};
