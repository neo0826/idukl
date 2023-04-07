const { Message, Client } = require("discord.js");

module.exports = {
    name: "proton",
    aliases: ['pt'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`
:wave: | Welcome to Proton bot, Let's begin by Inviting ProtonBot to your server and make it better!

**⭐ | First, Invite ProtonBot to your server by -invite in __#commands__ channel.**

**📜 | let's talk about the features, The features of the bot are that it provides everything you need in your server from moderation commands, general commands, commands, poem and avatar commands!**

**🔖 | the bot works with slash and prefix [ - ] . To see all the categories with their commands use -help -> <#1061718070516793384>**

**📥 | If u have any suggestion/feedback/quesstion or anything else check this channel: #suggestion-feedback**`);
    },
};
