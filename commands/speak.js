exports.run = (bot, msg, params = []) => {
  msg.reply(args.join(' '));
  msg.delete()
    .then(result => console.log(`Deleted message from ${result.author}`))
    .catch(error => console.log(error)); // will delete message incoming
};

exports.conf = {
  enabled: true, // not used yet
  guildOnly: false, // not used yet
  aliases: [],
  permLevel: 0 // Permissions Required, higher is more power
};

exports.help = {
  name : "speak",
  description: "You want the bot say something for you, tell him",
  usage: "speak <parameter>"
};
