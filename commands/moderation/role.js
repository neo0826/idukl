const Discord = require("discord.js");
require('discord-reply')
const { Permissions } = require('discord.js');
const { color } = require("../../config.json");
let red = "#F04A47"
let green = "#43B581"
let yellow = "#FFFF00"

module.exports = {
name: "role",
aliases: [],
usage:"role add/remove role user",
category:"moderation",
run: async (client, message, args ) => {
 let member = message.author
    let check = "✅"
    let cross = "❌"
    let warn = "⭕"

  if(!args[0] && args !== 'add' && args !== 'give' && args !== 'remove') return message.channel.send(`${cross} | usage: \`sb role <add/remove> <member> <role>\``)

  if(args[0] == 'add' || args[0] == 'give') {

  if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES))return message.channel.send(`${cross} | You don't have permission`);

  let add = args.slice(2).join(" ")

  let role = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.name === add);

  let member = message.mentions.members.first() || message.guild.members.cache.find(member => member.id === args[0]);

  if(!member) return message.channel.send(`${cross} | Please mention a user!`);

  if(!add) return message.channel.send(`${cross} | Please specify the role you want to give to ${member.user.username}`);

  if(!role) return message.channel.send(`${cross} | I can't find the role! Please specify a valid role`);

  if(member.roles.cache.get(role.id)) return message.channel.send(`${cross} | Member already have the role`);

  member.roles.add(role)
  let embed = new Discord.MessageEmbed()
  .setTitle(`Add Role`)
  .setDescription(
    `✅ | Succesfully gave **${member.user.username}** the ${role} role!`
    )

  .setFooter(
    `requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic:true})
    )
  .setColor(colof)

  message.channel.send({embeds :[embed]});

  }

  if(args[0] == 'remove') {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${cross} | You don't have permission`);

  let add = args.slice(2).join(" ")

  let role = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.name === add);

  let member = message.mentions.members.first() || message.guild.members.cache.find(member => member.id === args[0]);

  if(!member) return message.channel.send(`❌ | Please mention a user!`);

  if(!add) return message.channel.send(`❌ | Please specify the role you want to remove from ${member.user.username}`);

  if(!role) return message.channel.send(`❌ | I can't find the role! Please specify a valid role`);

  if(!member.roles.cache.get(role.id)) return message.channel.send(`❌ | Member don't have the role`);

  member.roles.remove(role)
  let embed = new Discord.MessageEmbed()
  .setTitle(`Removed Role`)
  .setDescription(
    `✅ | Succesfully removed **${member.user.username}** the ${role} role!`
    )

  .setFooter(
    `requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic:true})
    )
  .setColor(color)

  message.channel.send({embeds : [embed]});
  }


}}
