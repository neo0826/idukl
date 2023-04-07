const discord = module.require("discord.js");
const spanish = require("../../JSON/tx.json")
const { color } = require("../../config.json");

module.exports = {
  name: "textspanish",
  aliases: ["TextSpanish", "Textspain", "TEXTSPAIN", "ts", "tsp"],
  category: "text",
  usage: "textspanish",
  description: "random spanish text",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let sp = spanish.sp[Math.floor((Math.random() * spanish.sp.length))];
 
    message.channel.send({ content: `${sp}` });
  },
};
