const Discord = require('discord.js');

module.exports = (client, msg, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle(`Information and details about us'`)
    .setAuthor(`Author: ${msg.author.username}#${msg.author.discriminator}`, "https://i.imgur.com/lm8s41J.png")
    .setColor(0x00AE86)
    .setDescription(`${msg.guild.name}'s Information and Details`)
    //.setImage("http://i.imgur.com/yVpymuV.png")
    .setThumbnail("http://i.imgur.com/yVpymuV.png")
    .setFooter(msg.guild.region, "http://i.imgur.com/w1vhFSR.png")
    .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
    .addField('Members', `${msg.guild.members.filter(member => member.user.bot).size} bots of ${msg.guild.memberCount} members`)
    .addField('Channels', `${msg.guild.channels.filter(chan => chan.type === 'voice').size} voice / ${msg.guild.channels.filter(chan => chan.type === 'text').size} `)
    .addField('Roles', msg.guild.roles.map(role => role.name).join(', '));

  msg.channel.send({ embed });
}
