const { MessageEmbed } = require("discord.js");
const { color } = require("../../config.json");

module.exports = {
    name: "help",
    aliases: ["h"],
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
            .setColor(color)
            .setAuthor({name:'Default Prefix: -', iconURL: client.user.avatarURL()})
            .setThumbnail(client.user.avatarURL({size:512}))
            .addFields(
                { name: "• Public:", value: `‌botinfo, bugreport, help, invite, ping, avatar, google, imdb, say, servericon, server, translate, user, weather, wiki` },
                { name: "• Funny:", value: `ascii, calculator, catsay, clap, cowsay, dab, emojify, fliptext, greentext, hack, hug, joke, kill, meme, respect, reverse, rickroll, roast` },
                { name: "• Moderation:", value: `ban, kick, mute, purge, role, slowmode,  unban, unmute, warn, embed, lock, unlock, hide` },
                { name: "• Avatar:", value: `panimal, pbaby, pboy, pemoji, pgirl, panimeboy, pdrain, pcar, pmoney` },
             //   { name: "• Gif:", value: `anime, animeboy, animal, emoji, couple, boy, girl, sad, neon, smoking` },
           //     { name: "• Banner:", value: `boybanner, girlbanner, animalbanner, animebanner, aestheticbanner, carbanner\n**Aliases:** bb, gb, ab, anb, asb, cb` },
                { name: "• Text:", value: `textarabic, textenglish, textkurdish, textpersian, textturkish, textspanish, textitalian\n**Aliases:** ta, te, tk, tp, tr, ts, ti` }
                )
            .setFooter({text:`Requester: ${message.author.tag}`, iconURL: `${message.author.avatarURL({dynamic: true})}`});
            message.channel.send({embeds: [embed]}).catch(err => console.log("Error - ", err))
    },
};
