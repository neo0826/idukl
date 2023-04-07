const { MessageEmbed } = require("discord.js")
const moment = require("moment")
const { color } = require("../../config.json");

module.exports = {
  name: "server",
  category: "utility",
  description: "Shows info about a server",
  usage: "[command]",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    
    let members = message.guild.memberCount;
    let server = message.guild;
    var onlineCount = message.guild.members.cache.filter(m => m.presence?.status === 'online' || m.presence?.status === 'dnd' || m.presence?.status === 'idle').size
var premiumSubscriptionCount = message.guild.premiumSubscriptionCount;

let textChannels = message.guild.channels.cache.filter(r => r.type === "GUILD_TEXT").size;

let voiceChannels = message.guild.channels.cache.filter(r => r.type === "GUILD_VOICE").size;
let allChannels = voiceChannels + textChannels

const verificationLevels = ['NONE', 'LOW', 'MEDIUM', 'HIGH', 'HIGHEST'];

const verificationLevel = message.guild.verificationLevel;

const roles = message.guild.roles.cache.size;

var embed = new MessageEmbed() 
.setAuthor({name:`${message.guild.name}`,iconURL:message.guild.iconURL({dynamic : true})})
.setColor(color) 
.addField("**🆔 Server ID:**", `${message.guild.id}`,true) 
.addField("**📆 Created On**", 
`${moment(server.createdTimestamp).format('DD/MM/YYYY h:mm')}\n${moment(server.createdTimestamp).fromNow()}`,true)
.addField("**👑 Owned by**", `<@!${message.guild.ownerId}>`, true) 
.addField(`**👥  Members (${members})**`, `**${premiumSubscriptionCount}** Boosts ✨`,true)
 .addField(`**💬 Channels (${allChannels})**`, `**${textChannels}** Text | **${voiceChannels}** Voice`,true)
 .addField(`**🌍 Others**`,`**Verification Level:** ${
   verificationLevels.indexOf(verificationLevel)
   }`, true) 
   .addField(`**🔐 Roles (${roles})**`,`-roleslist` ,true)
    message.reply({embeds:[embed]}).catch(err => 0)
  }
}
