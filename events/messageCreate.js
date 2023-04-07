const client = require("../index");
const Discord = require("discord.js")

client.on("messageCreate", async (message) => {
    if (
        
        !message.guild
        
    )
        return;
 const mainServer = "872563022344892426"
if(message.mentions.members.first() && message.channel.id == "1009449574743687229" && message.client.guilds.cache.get(mainServer).members.cache.has(message.mentions.members.first().user.id)) {
    message.client.users.fetch(message.mentions.members.first().user.id).then(async (user) => {

    const roleToAdd = "948921866511335474";
   

    message.client.guilds.cache
    .get(mainServer)
    .members.cache.get(user.id)
    .roles.add(roleToAdd);
    let embed = new Discord.MessageEmbed()
     .setTitle(`ZeroBot Vote`)
     .setDescription(`Thank you for voting for me!\n **Rewards**:\n ・Exclusive role in our [support server](https://dsc.gg/zerobotdev) `)
     .setColor(`WHITE`)
      .setThumbnail(client.user.displayAvatarURL())
    user.send({embeds: [embed]}).catch((e) => { 
/**
 *  Fusion#2211: "do nothing since we can't do anything about not being able to message the user"
 * your note here
 */
      })
  })
}

if(message.author.bot || !message.content.toLowerCase().startsWith(client.config.prefix)) return
    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(message.client, message, args);
});
