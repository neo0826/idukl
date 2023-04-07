const { MessageEmbed } = require('discord.js')
const { color } = require("../../config.json");

module.exports = {
  name: "bugreport",
  aliases: ["bug"],
  usage: "bugreport",
  description: "Report a bug!",
  category: "info",
  run: async(client, message, args) => {
    let questions = [
      "What is the bug?",
      "What will happen if there wasn't the bug?",
      "Do you have any screenshots of the bug?",
    ]

    let collectCounter = 0;
    let endCounter = 0;

    let filter = (m) => m.author.id === message.author.id

    let appStart = await message.channel.send({content: questions[collectCounter++]})
    let channel = message.channel

    const collector = message.channel.createMessageCollector({
      filter
    })

    collector.on('collect', async () => {
      if(collectCounter < questions.length) {
        channel.send({content: questions[collectCounter++]})
      } else {
        collector.stop("fulfilled")
      }
    })

    let reportChannel = client.channels.cache.get("1061714333362565160")

    let mappedResponses;

    collector.on('end', (collected, reason) => {
      if(reason === 'fulfilled') {
        let index = 1;
        mappedResponses = collected.map((msg) => {
          return `${index++}) ${questions[endCounter++]}\n${msg.content ? msg.content : `[Proof 1](${msg.attachments.first()?.proxyURL})`}`
        }).filter(m => !m.bot).join("\n\n")
      }

      reportChannel.send({embeds: [new MessageEmbed()
      .setTitle(`Bug Report!`)
      .setAuthor(`Report by ${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))
      .setDescription(mappedResponses)
      .setColor(color)
      .setFooter(message.author.id)
      .setTimestamp()
      ]})
    })
  }
}
