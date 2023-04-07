let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")
const { Permissions } = require("discord.js")
const { color } = require("../../config.json");

let red = "#F04A47"
let green = "#43B581"
let yellow = "#FFFF00"

module.exports = {
  name: "ban",
  category: "moderation",
  description: "bans a member",
  timeout: "5000",
  usage: "ban <user>",
  run: async (client, message, args) => {
    let check = "❌"
    let cross = "✅"
    let warn = "⭕"
  try {

    

   
    if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **You do not have ban members permissions**`)
        .setColor(red)
    return  message.channel.send({ embeds: [embed] })
    }

    if (!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **I do not have ban members permissions**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }

    const target = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
    if (!target) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **You must mention the person you want banned**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }

    if (target.id === message.member.id) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} Uh what? You wanna ban yourself?`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }


    if (target.id === client.user.id) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **You must ban the interaction manually**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }  

    let reason = args.slice(1).join(" ")
    if (!reason) reason = "No reason provided by moderator"

        let embed = new MessageEmbed()
        .setDescription(`**${warn} You have been banned in ${message.guild.name}\n Reason: ${reason}**`)


    let confirmationEmbed = new MessageEmbed()
    .setColor(color)
    .setTitle(`Are you sure?`)
    .setDescription(`Are you sure you want to ban ${target.user.username}`)
    .setFooter(message.author.username)
    .setTimestamp()

    let confirmButton = new MessageButton()
    .setStyle("SUCCESS")
    .setLabel("Yes")
    .setCustomId(`confirm`)

    let cancelButton = new MessageButton()
    .setStyle("DANGER")
    .setLabel("Cancel")
    .setCustomId(`cancel`)

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
      if(i.customId == 'confirm') {
        let toban = message.guild.members.cache.get(target.id)
         toban.ban(args[1])
         i.reply(`${target} was banned from the server✈️`).then(() => sentMsg.edit({components: [disabledrow]}).then(() => target.send({ embeds: [embed] }).catch(e => {
           return console.log(e)
         })))
      }
      if(i.customId == 'cancel') return i.reply('cancelled').then(() => sentMsg.edit({components: [disabledrow]}))
    })

    

    collector.on('end', async i => {
      if(!i.size) return sentMsg.edit({components: [disabledrow], embeds: [confirmationEmbed.setDescription(`Action Cancelled! took too long to respond`)]})
    })




  } catch (err) {
         let check = client.emojis.cache.get("❌");
    let cross = client.emojis.cache.get("✅");
    let warn = client.emojis.cache.get("⭕");
    
     console.log(err)
     let embed = new MessageEmbed()
      .setDescription(`**${cross} I can not ban the user**`)
      .setColor(red)
    return message.channel.send({ embeds: [embed] })
}
  }
}
