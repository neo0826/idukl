const { Discord, MessageEmbed } = require("discord.js")
const { Permissions } = require("discord.js")
const { color } = require("../../config.json");

let red = "#F04A47"
let green = "#43B581"
let yellow = "#FFFF00"

module.exports = {
  name: "unban",
  category: "moderation",
  description: "unbans a member",
  timeout: "5000",
  usage: "unban <user>",
  run: async (client, message, args) => {
    let check = "✅"
    let cross = "❌"
    let warn = "⭕"
    try {




      if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
        let embed = new MessageEmbed()
          .setDescription(`${cross} **You do not have ban members permissions**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }

      if (!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
        let embed = new MessageEmbed()
          .setDescription(`${cross} **I do not have ban members permissions**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }

      const target = args[0]
      if (!target) {
        let embed = new MessageEmbed()
          .setDescription(`${cross} **You must provide the user ID**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }

      if (target === message.member.id) {
        let embed = new MessageEmbed()
          .setDescription(`${cross} **You can not unban yourself**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }


      if (target === client.user.id) {
        let embed = new MessageEmbed()
          .setDescription(`${cross} **You must unban the interaction manually**`)
          .setColor(red)
        return message.channel.send({ embeds: [embed] })
      }


      setTimeout(async () => {
        message.member.guild.members.unban(target)
      }, 10)

      let embed = new MessageEmbed()
        .setDescription(`**${check} Unbanned ${target.username}**`)
        .setColor(green)
      message.channel.send({ embeds: [embed] })






    } catch (err) {
      let check = client.emojis.cache.get("✅");
      let cross = client.emojis.cache.get("❌");
      let warn = client.emojis.cache.get("⭕");

      console.log(err)
      let embed = new MessageEmbed()
        .setDescription(`**${cross} I can not unban the user**`)
        .setColor(red)
      return message.channel.send({ embeds: [embed] })
    }
  }
}
