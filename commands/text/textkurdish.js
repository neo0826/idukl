const discord = module.require("discord.js");
const kurdish = require("../../JSON/tx.json")
const { color } = require("../../config.json");

module.exports = {
  name: "textkurdish",
  aliases: ["textKurdish", "tk"],
  category: "text",
  usage: "textkurdish",
  description: "random kurdish text",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
   let kr = kurdish.kr[Math.floor((Math.random() * kurdish.kr.length))];
    

    message.channel.send({ content: `${kr}` });
  },
};
