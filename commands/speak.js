module.exports = (client, msg, args) => {
  // if (msg.author.id !== auth.ownerID) return msg.reply('Sorry I cannot help you, maybe later...'); // prevent other user to use the bot commands
  msg.reply(args.join(' '));
  msg.delete()
    .then(result => console.log(`Deleted message from ${result.author}`))
    .catch(error => console.log(error)); // will delete message incoming
}
