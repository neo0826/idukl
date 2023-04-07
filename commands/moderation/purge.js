const discord = require("discord.js")
const { MessageEmbed, Permissions } = require('discord.js');
const { color } = require("../../config.json");

let red = "#F04A47"
let green = "#43B581"
let yellow = "#FFFF00"
module.exports = {
  name: "purge",
  aliases: ["delete", "fckmessage", "thishthash"],
  category: "moderation",
  description: "delete messages",
  usage: "!purge <number>",
  run: (client, message, args) => {
  

 let member = message.author;
    let check = "✅"
    let cross = "❌"
    let warn = "⭕"

try {
  let arg = message.content.split(" ");
  if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
    const embed = new MessageEmbed()
      .setDescription(`**${cross} Missing perms **`)
      .setColor(wrong)
    return message.channel.send({ embeds: [embed] })
  }

      let clear = args[0];
      if (!clear) {
      const embed = new MessageEmbed()
        .setDescription(`**${cross} Provide a number **`)
        .setColor(red)
      return message.channel.send({ embeds: [embed] })
      }
        
      if (clear > 100) {
      const embed = new MessageEmbed()
        .setDescription(`**${cross} I can not purge more than 100 messages**`)
        .setColor(red)
      return message.channel.send({ embeds: [embed] })
      }
        
      if (clear < 1) {
      const embed = new MessageEmbed()
        .setDescription(`**${cross} Give a number above 1**`)
        .setColor(red)
      return message.channel.send({ embeds: [embed] }) 
      }
      
        if (isNaN(clear)) {
      const embed = new MessageEmbed()
        .setDescription(`**${cross} Provide a number!**`)
        .setColor(red)
      return message.channel.send({ embeds: [embed] }) 
        }

      message.channel.bulkDelete(clear, true);
      let embed = new MessageEmbed()
      .setDescription(`${check}** Succesfully cleared ${clear} messages!** `)
      .setColor(green)
      message.channel.send({embeds : [embed]})
        .then(message => message.delete({ timeout:7000 }))
     
    
} catch (err) {
console.log(err)
const embed = new MessageEmbed()
        .setDescription(`**${cross} I can't purge messages older than 14 days**`)
        .setColor(red)
      return message.channel.send({ embeds: [embed] }) 
}

  }
}
