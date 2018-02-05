exports.run = (client, msg, args) => {
  msg.react('💩');
};

exports.conf = {
  enabled: true, // not used yet
  guildOnly: false, // not used yet
  aliases: [],
  permLevel: 0 // Permissions Required, higher is more power
};

exports.help = {
  name : "react",
  description: "You wanna the bot react from what you said",
  usage: "react"
};
