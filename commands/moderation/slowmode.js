const Discord = require("discord.js")
let snipe = new Discord.Collection();
const { Welcomer } = require("canvacord");
const { color } = require("../../config.json");
let red = "#F04A47"
let green = "#43B581"
let yellow = "#FFFF00"

const { Permissions } = require('discord.js');
module.exports = {
  name: "slowmode",
  category: "moderation",
  description: "Add a slowmode",
  usage: "slowmode <argument>",
  run: async (client, message, args) => {
    let check = "✅"
    let cross = "❌"
    let warn = "⭕"

  try {

   


    let member = message.author
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      let embed = new Discord.MessageEmbed()
      .setDescription(`${cross} **Missing Administrator permissions**`)
      .setColor(red)
      message.channel.send({ embeds: [embed] })
      return;
    }



    let embed1 = new Discord.MessageEmbed()
    .setDescription(`${cross} **What do you want the slowmode to be set to?**`)
    .setColor(red)
    if (!args[0]) return message.channel.send({ embeds: [embed1] });


    let embed2 = new Discord.MessageEmbed()
    .setDescription(`${cross} **Please type a real number!**`)
    .setColor(red);
    if (isNaN(args[0])) return message.channel.send({embeds :[embed2]});


    let embed3 = new Discord.MessageEmbed()
    .setDescription(`${cross} **Number must be between 1 - 21600**`)
    .setColor(red);
    if (args[0] > 21600 || args[0] < 1) return message.channel.send({embeds:[embed3]})



    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

    channel.setRateLimitPerUser(args[0])


    let embed4 = new Discord.MessageEmbed()
    .setDescription(`${check} **Slow Mode set to ${args[0]}**`)
    .setColor(green)
    message.channel.send({embeds : [embed4]})
    return;


  } catch (err) {

    console.log(err)
    let embed5 = new Discord.MessageEmbed()
    .setDescription(`${cross} **An error occured. You may dm the bot dev**`)
    .setColor(red);
    return message.channel.send({embeds:[embed5]})
  }
  }
}
