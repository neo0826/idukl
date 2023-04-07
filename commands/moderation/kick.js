let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")
const { Permissions } = require("discord.js")
const { color } = require("../../config.json");
let red = "#F04A47"
let green = "#43B581"
let yellow = "#FFFF00"

module.exports = {
  name: "kick",
  category: "moderation",
  description: "kicks a member",
  timeout: "5000",
  usage: "kick <user>",
  run: async (client, message, args) => {
    let check = "✅"
    let cross = "❌"
    let warn = "⭕"
    
  try {
    


   
    if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **You do not have kick members permissions**`)
        .setColor(red)
    return  message.channel.send({ embeds: [embed] })
    }

    if (!message.guild.me.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **I do not have kick members permissions**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }

    const target = message.mentions.users.first()
    if (!target) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **You must mention the person you want kicked**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }

    if (target.id === message.member.id) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **You can not kick yourself**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }


    if (target.id === client.user.id) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **You must kick the interaction manually**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }   


    let reason = args.slice(1).join(" ")
    if (!reason) reason = "No reason provided by moderator"

    let confirmationEmbed = new MessageEmbed()
    .setColor(color)
    .setTitle(`Are you sure?`)
    .setDescription(`Are you sure you want to kick ${message.mentions.members.first().user.username}?\nReason: ${reason}`)
    .setFooter(message.author.username)
    .setTimestamp()

    let confirmButton = new MessageButton()
    .setStyle("SUCCESS")
    .setLabel("Yes")
    .setCustomId(`Confirm`)

    let cancelButton = new MessageButton()
    .setStyle("DANGER")
    .setLabel("Cancel")
    .setCustomId(`Cancel`)

    let row = new MessageActionRow()
    .addComponents(
      confirmButton, cancelButton
    )

    let sentMsg = await message.channel.send({embeds: [confirmationEmbed], components: [row]})

    const collector = sentMsg.createMessageComponentCollector({ componentType: 'BUTTON', time: 5000, max: 1});

    let disabledrow = new MessageActionRow()
    .addComponents(
      confirmButton.setDisabled(true), cancelButton.setDisabled(true)
    )

    collector.on('collect', async i => {
      if(i.user.id !== message.author.id) return i.reply({content: 'you cant interact with this', ephemeral: true })
      if(i.customId == 'Confirm') {
        let kick = message.guild.members.cache.get(target.id)
        kick.kick(args[1])
        let kickedEmbed = new MessageEmbed()
      .setDescription(`Successfully Kicked **${target.username}**`)
         i.reply({embeds: [kickedEmbed]}).then(() => sentMsg.edit({components: [disabledrow]}).then(() => target.send(`You got kicked from ${message.guild.name}\nReason: ${reason}`).catch(e => {
           return console.log(e)
         })))
      }
      if(i.customId == 'Cancel') return i.reply('cancelled').then(() => sentMsg.edit({components: [disabledrow]}))
    })




  } catch (err) {

    let check = client.emojis.cache.get("✅");
    let cross = client.emojis.cache.get("❌");
    let warn = client.emojis.cache.get("⭕");
    
     console.error(err)
     let embed = new MessageEmbed()
      .setDescription(`**${cross} I can not kick the user**`)
      .setColor(red)
    return message.channel.send({ embeds: [embed] })
}
  }
}
