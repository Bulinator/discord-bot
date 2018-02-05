exports.run = (client, msg, args) => {
  var args = msg.content.split(' ');
  args.shift();

  msg.delete()
    .then(result => console.log(`Deleted message from ${result.author}`))
    .catch(error => console.log(error)); // will delete message incoming
  msg.reply(`https://www.google.fr/search?q=${args.join('+')}`);
};

exports.conf = {
  enabled: true,
  acl: 0,
  aliases: [],
}

exports.help = {
  name: 'google',
  description: 'Let the bot google it',
  usage: 'google <parameter>'
}
