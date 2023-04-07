const config = require("./config.json") 

const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js") 
const client = require("../../index")

client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
 let embed = new MessageEmbed()
 .setColor('#303136')
 .setTitle('Proton Official Server.')
 .setURL('https://discord.gg/nqsFVcGBJN')
 .setDescription(`Hey :wave: If You don\'t know me Im ProtonBot, A discord multi-purpose bot that does **gif, photos, mod, utility, funny,** and much more things..`)
 .addField("Thanks", `Thanks For Inviting Me :heart:`)
 .addField("Prefix:", `My Prefix is [**\`-\`**]`)
 .addField("Help Page:", `use [**\`-help\`**] to get list of all commands`)
 .addField("Creator:", `Matheros#2989`)
 .setTimestamp()
 .setFooter('Proton ~ Team');
channel.send({embeds : [embed]});
}) 
