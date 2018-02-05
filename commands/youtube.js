exports.run = (bot, msg, params = []) => {
  msg.delete()
    .then(result => {
      console.log(`Deleted message from ${result.author}`);
      msg.reply(`Watch this one: https://www.youtube.com/watch?v=Tfr44XSIHxo`);
    })
    .catch(error => console.log(error)); // will delete message incoming
};

exports.conf = {
  enabled: true, // not used yet
  guildOnly: false, // not used yet
  aliases: [],
  permLevel: 0 // Permissions Required, higher is more power
};

exports.help = {
  name : "youtube",
  description: "Work in progress to make you happy by a random video",
  usage: "youtube"
};
