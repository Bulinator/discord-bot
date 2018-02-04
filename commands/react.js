module.exports = (client, msg, args) => {
  msg.react('💩');

  //msg.react(client.emojis.find('name', 'spud-bot').toString());
  //await msg.react('🇪');
  //await msg.react('🇩'); async = node > 7.6
  // emojis not working....still to read doc
  // msg.channel.send(client.emojis.find('name', 'Speudyland'));
}
