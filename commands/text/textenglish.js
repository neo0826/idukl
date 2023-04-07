const discord = module.require("discord.js");
const english  = require("../../JSON/tx.json")
const { color } = require("../../config.json");

module.exports = {
  name: "textenglish",
  aliases: ["textEnglish", "te", "ten"],
  category: "text",
  usage: "textenglish",
  description: "random english text",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 let en = english.en[Math.floor((Math.random() * english.en.length))];    

    message.channel.send({ content: `${en}` });
  },
};
