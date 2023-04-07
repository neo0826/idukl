const fetch = require("node-fetch")
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")
const embed = MessageEmbed;
const component = MessageActionRow;
const button =  MessageButton;
const { color } = require("../../config.json");

module.exports = {
    name: "meme",
    description: "Generate memes by clicking the button until you get bored",
    run: async (client, message, args) => {  
      
   const row = new component().addComponents(
   new button()
   .setLabel("Next Meme")
   .setStyle("SUCCESS")
   .setCustomId("memerate"),
       
    new button()
   .setLabel("End Interaction")
   .setStyle("SECONDARY")
   .setCustomId("memeclose")
   )
   
   const dis = new component().addComponents(
   new button()
   .setLabel("Generate")
   .setStyle("SUCCESS")
   .setCustomId("memerate"),
       
    new button()
   .setLabel("End Interaction")
   .setStyle("SECONDARY")
   .setCustomId("memeclose")
   )
   
   
    let meme = await fetch("https://meme-api.herokuapp.com/gimme")
    .then(r => r.json())
  
   const emb = new embed()
   .setTitle(meme.title)
   .setURL(meme.postLink)
   .setImage(meme.url)
   .setColor("RANDOM")
   .setFooter(`${meme.ups}👍 || r/${meme.subreddit}`)
   
  let msg = await message.channel.send({
      embeds: [emb],
     components: [row]
      })  
  
  
 let filter = (i) => i.user.id === message.author.id;
       
const collector = await msg.createMessageComponentCollector({
    filter,
    type: "BUTTON"
})       
  
collector.on("collect", async (i) =>{
    if(i.customId === "memerate") {
    let meme2 = await fetch("https://meme-api.herokuapp.com/gimme")
    .then(r => r.json())
  
   const emb2 = new embed()
   .setTitle(meme2.title)
   .setURL(meme2.postLink)
   .setImage(meme2.url)
   .setColor(color)
   .setFooter(`${meme2.ups}👍 || r/${meme2.subreddit}`)    
    return msg.edit({
      embeds: [emb2]
    }) 
    }
    if(i.customId === "memeclose") {
    return msg.delete();
           }
         })
   }  
}
