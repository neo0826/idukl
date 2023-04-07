const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("Made By ZeroBot Development")
})

app.listen(3000, () => {
 console.log("Bot is being made 24/7")
})

const Discord = require("discord.js") // otherwise we can't make discord embeds
const { Client, Collection } = Discord
const { prefix, token } = require("./config.json")


//client
const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_INVITES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_VOICE_STATES",
    "GUILD_MESSAGE_REACTIONS"
  ],
  allowedMentions: {
    parse: ["everyone", "roles", "users"],
    repliedUser: true
  },
  partials: ["CHANNEL", "GUILD_MEMBER","GUILD_REACTIONS", "MESSAGE", "REACTION", "USER"]
});

const { GiveawaysManager } = require('discord-giveaways');

const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#FF0000',
        reaction: '🎉'
    }
});
client.giveawaysManager = manager;

module.exports = client;




// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json")
client.color = require("./color.json")

// Initializing the project
require("./handler")(client);

const { mongooseConnectionString } = require("./config.json");

client.login(process.env.token || token); //i required config.json so if we do const config = require("./config.json") it will do config.token
// you can either add in variables(secret .env or add token in config.json)
