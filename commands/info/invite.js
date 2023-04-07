const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
const { color } = require("../../config.json");

module.exports = {
  name: "invite",
  aliases: ["links"],
  usage: "invite",
  description: "Invites Link",
  category: "bot",
  run: async (client, message, args) => {


      const invite = new MessageButton()
					.setLabel('Invite Me')
					.setStyle('LINK')
          .setURL(`https://discord.com/oauth2/authorize?client_id=800442243697213442&permissions=8&scope=bot`)
      

		  const server = new MessageButton()
					.setLabel('Contact')
					.setStyle('LINK')
          .setURL("https://discord.com/users/729019851049402498")
      

      const row1 = new MessageActionRow()
      .addComponents([invite, server])


    let embed = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle("**Click on the Buttons for each link**")
      
  let menumsg = await message.channel.send({ embeds: [embed], components: [ row1] });
   
  }
}
