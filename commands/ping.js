/*
module.exports = (client, msg, args) => {
  //msg.reply(`Pong or not, by the way latency is ${Math.round(bot.ping)} ms`);
  msg.reply('Plop...').then((result) => {
    result.edit(`Plop, the latency is ${result.createdTimestamp - msg.createdTimestamp}ms and API latency is ${Math.round(client.ping)}ms`);
  });
}
*/

exports.run = (bot, msg, params = []) => {
  msg.reply('Plop...').then((result) => {
    result.edit(`Plop, the latency is ${result.createdTimestamp - msg.createdTimestamp}ms and API latency is ${Math.round(bot.ping)}ms`);
  });
};

exports.conf = {
  enabled: true, // not used yet
  guildOnly: false, // not used yet
  aliases: [],
  permLevel: 0 // Permissions Required, higher is more power
};

exports.help = {
  name : "ping",
  description: "Get a ping response latency",
  usage: "ping"
};
