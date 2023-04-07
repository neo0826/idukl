const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
const { color } = require("../../config.json");

module.exports = {
  name: "vote",
  aliases: ["v"],
  usage: "vote",
  description: "vote me XDD",
  category: "bot",
  run: async (client, message, args) => {


      const invite = new MessageButton()
					.setLabel('Vote!')
					.setStyle('LINK')
          .setURL(`https://top.gg/bot/800442243697213442/vote`)
      

		  const server = new MessageButton()
					.setLabel('Support Server')
					.setStyle('LINK')
          .setURL("https://discord.gg/aegaEYFRVj")
      

      const row1 = new MessageActionRow()
      .addComponents([invite, server])


    let embed = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle("**Thanks For choosing Me!**")
      
  let menumsg = await message.channel.send({ embeds: [embed], components: [ row1] });
   
  }
}
