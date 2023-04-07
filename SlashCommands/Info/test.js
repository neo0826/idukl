const { Client, CommandInteraction } = require("discord.js");
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: "test",
    description: "Show all the commands",
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {    
      
      let homeembed = new MessageEmbed()
      .setColor("BLUE")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.username, client.user.displayAvatarURL())    
      .setDescription("Slaw")     
      .setFooter(`${client.user.username} is the best!`)

      let btnraw = new MessageActionRow().addComponents([
        new MessageButton().setCustomId("home").setStyle("SUCCESS").setLabel("Home"),
        new MessageButton().setCustomId("util").setStyle("PRIMARY").setLabel("Utility"),
        new MessageButton().setCustomId("gif").setStyle("PRIMARY").setLabel("Gif"),
        new MessageButton().setCustomId("photo").setStyle("PRIMARY").setLabel("Photos")
      ]);
      let d_btnraw = new MessageActionRow().addComponents([
        new MessageButton().setCustomId("d_home").setStyle("SUCCESS").setLabel("Home").setDisabled(true),
        new MessageButton().setCustomId("d_util").setStyle("PRIMARY").setLabel("Utility").setDisabled(true),
        new MessageButton().setCustomId("d_gif").setStyle("PRIMARY").setLabel("Gif").setDisabled(true),
        new MessageButton().setCustomId("d_photo").setStyle("PRIMARY").setLabel("Photos").setDisabled(true)
      ]);

      let utils = new MessageEmbed()
      .setColor("BLUE")
      .setTitle("Info Section")
      .setDescription(``)

      let gifs = new MessageEmbed()
      .setColor("BLUE")
      .setTitle("Gif Section")
      .addField("Avaialby Commands:", `anime, animeboy, animal, emoji, couple, boy, girl, sad, neon, smoking`)

      let photos = new MessageEmbed()
      .setColor("BLUE")
      .setTitle("Photo Section")
      .addField("Availby Commands:", `panimal, pbaby, pboy, pemoji, pgirl, panimeboy, pdrain, pcar, pmoney`)

      await interaction.followUp({ embeds: [homeembed], components: [btnraw] }).then(async (msg) => {
        let filter = i => i.user.id === interaction.user.id;
        let collector = await msg.createMessageComponentCollector({filter : filter, time : 10000 }); // time when the get disable
        collector.on('collect', async (btn) => {
          if(btn.isButton()) {
            if(btn.customId === "util") {
              await btn.deferUpdate().catch(e => {})
              msg.edit({embeds : [utils] })
            } else if(btn.customId === "gif") {
              await btn.deferUpdate().catch(e => {})
              msg.edit({embeds : [gifs] })
            } else if(btn.customId === "photo") {
              await btn.deferUpdate().catch(e => {})
              msg.edit({embeds : [photos] })
            } else if (btn.customId === "home") {
              await btn.deferUpdate().catch(e => {})
              msg.edit({embeds : [homeembed] })
            }
          }
        })
          collector.on('end', () => {
            msg.edit({embeds : [homeembed], components : [d_btnraw] })
          })
      })
    },
};
