const discord = module.require("discord.js");
const italian   = require("../../JSON/tx.json")
const { color } = require("../../config.json");

module.exports = {
  name: "textitalian",
  aliases: ["TextItalian", "Textitaly", "TEXTITALI", "ti", "til"],
  category: "text",
  usage: "textitalian",
  description: "random italian text",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let it = italian.it[Math.floor((Math.random() * italian.it.length))];
 
    message.channel.send({ content: `${it}` });
  },
};
