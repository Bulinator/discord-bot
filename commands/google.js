module.exports = (client, msg, args) => {
  var args = msg.content.split(' ');
  args.shift();
  
  msg.delete()
    .then(result => console.log(`Deleted message from ${result.author}`))
    .catch(error => console.log(error)); // will delete message incoming
  msg.reply(`https://www.google.fr/search?q=${args.join('+')}`);
};
