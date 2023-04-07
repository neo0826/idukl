const discord = module.require("discord.js");
const persian = require("../../JSON/tx.json")
const { color } = require("../../config.json");

module.exports = {
  name: "textpersian",
  aliases: ["textirani", "tp"],
  category: "text",
  usage: "textpersian",
  description: "random perian text",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
   let pr = persian.pr[Math.floor((Math.random() * persian.pr.length))];
    

    message.channel.send({ content: `${pr}` });
  },
};
