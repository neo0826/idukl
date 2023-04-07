const { Permissions, MessageEmbed } = require("discord.js")
const { color } = require("../../config.json");
const db = require('quick.db')
let red = "#F04A47"
let green = "#43B581"
let yellow = "#FFFF00"

module.exports = {
  name: "warn",
  description: "Warns a user along with storing the total warns",
  usage: "warn <user> <reason>",
  timeout: "4000",
  category: "moderation",
  run: async (client, message, args) => {

    let check = "✅"
    let cross = "❌"
    let warn = "⭕"
    try {


      
      if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBER)) {
        const embed = new MessageEmbed()
          .setDescription(`**${cross} Missing KICK MEMBERS permissions**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }

      const target = message.mentions.users.first()
      if (!target) {
        const embed = new MessageEmbed()
          .setDescription(`**${cross} You must mention the user you want warned**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }

      if (target.bot) {
        const embed = new MessageEmbed()
          .setDescription(`**${cross} You cannot warn bots**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }

      if (target.id === message.author.id) {
        const embed = new MessageEmbed()
          .setDescription(`**${cross} Sorry but you can not warn yourself**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }


      if (message.member.roles.highest.comparePositionTo
        (message.mentions.members.first().roles.highest) < 1) {
        const embed = new MessageEmbed()
          .setDescription(`**${cross} You're role is too low**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }

      let reason = args.slice(1).join(" ")

      if (!reason) {
        const embed = new MessageEmbed()
          .setDescription(`**${cross} Please provide a valid reason**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }



      await db.add(`warns_${target.id}`, 1)
      let x = await db.get(`warns_${target.id}`)

      const embed = new MessageEmbed()
        .setDescription(`**${check} ${target.username} has been warned with ${x} now**`)
        .setColor(green)
      message.channel.send({ embeds: [embed] })

      try {

        let embed = new MessageEmbed()
          .setDescription(`${warn} **You have been warned in ${message.guild.name} by ${message.author.username} for ${reason}**`)
          .setColor(yellow)
        
        target.send({ embeds: [embed] })


      } catch (err) {
        const embed = new MessageEmbed()
          .setDescription(`**${cross} I can not send messages to that user**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }

    } catch (err) {
      console.log(err)
      const embed = new MessageEmbed()
        .setDescription(`**${cross} An unknown error occured**`)
        .setColor(red)
      return message.channel.send({ embeds: [embed] })
    }
  }
}
