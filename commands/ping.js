module.exports = (client, msg, args) => {
  //msg.reply(`Pong or not, by the way latency is ${Math.round(bot.ping)} ms`);
  msg.reply('Plop...').then((result) => {
    result.edit(`Plop, the latency is ${result.createdTimestamp - msg.createdTimestamp}ms and API latency is ${Math.round(client.ping)}ms`);
  });
}
