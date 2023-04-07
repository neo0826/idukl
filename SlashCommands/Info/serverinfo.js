const { MessageEmbed } = require("discord.js")
const moment = require("moment")
const { color } = require("../../config.json");

module.exports = {
    name: "serverinfo",
    description: "information about this server",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
    
    let members = interaction.guild.memberCount;
    let server = interaction.guild;
   // var onlineCount = interaction.guild.members.cache.filter(m => m.presence?.status === 'online' || m.presence?.status === 'dnd' || m.presence?.status === 'idle').size
var premiumSubscriptionCount = interaction.guild.premiumSubscriptionCount;

let textChannels = interaction.guild.channels.cache.filter(r => r.type === "GUILD_TEXT").size;

let voiceChannels = interaction.guild.channels.cache.filter(r => r.type === "GUILD_VOICE").size;
let allChannels = voiceChannels + textChannels

const verificationLevels = ['NONE', 'LOW', 'MEDIUM', 'HIGH', 'HIGHEST'];

const verificationLevel = interaction.guild.verificationLevel;

const roles = interaction.guild.roles.cache.size;

var embed = new MessageEmbed() 
.setAuthor({name:`${interaction.guild.name}`,iconURL:interaction.guild.iconURL({dynamic : true})})
.setColor("#303136") 
.addField("**🆔 Server ID:**", `${interaction.guild.id}`,true) 
.addField("**📆 Created On**", 
`${moment(server.createdTimestamp).format('DD/MM/YYYY h:mm')}\n${moment(server.createdTimestamp).fromNow()}`,true)
.addField("**👑 Owned by**", `<@!${interaction.guild.ownerId}>`, true) 
.addField(`**👥  Members (${members})**`, `**${premiumSubscriptionCount}** Boosts ✨\nOnlines: **0**`,true)
 .addField(`**💬 Channels (${allChannels})**`, `**${textChannels}** Text | **${voiceChannels}** Voice`,true)
 .addField(`**🌍 Others**`,`**Verification Level:** ${
   verificationLevels.indexOf(verificationLevel)
   }`, true) 
   .addField(`**🔐 Roles (${roles})**`,`-roleslist` ,true)
    interaction.followUp({ embeds: [embed] }).catch(err => 0)
  }
}
