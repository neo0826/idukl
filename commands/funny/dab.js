const Discord = module.require("discord.js");

module.exports = {
  name: "dab",
  description: "Adds dab emoji after each word",
  botPerms: ["USE_EXTERNAL_EMOJIS"],
  run: async (client, message, args) => {
    if (!args.length) {
      return message.channel.send("`Usage: !dab <text>`");
    }
    message.channel.send(
      args.join(" ").replace(/ /g, " ")
    );
  },
};
