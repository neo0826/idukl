const Discord = require('discord.js')

let { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'rickroll',
    category: "fun",
    description: 'RicK astleY',
    usage: 'rickroll',
    aliases: [],
    timeout: 1000,
    run : async (client, message, args) => {

      let member = message.mentions.members.first()

      if(!member) {

message.delete()
message.channel.send("https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825")
      } else {
        member.send("https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825")
        member.send(`You got **RICKROLLED** lol`)
        message.channel.send(`Rickroll sent to **${member.displayName}**`)
      }

}
}
