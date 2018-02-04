module.exports = (client, msg, auth) => {
  // if it's bot itself, no response
  if (msg.author.bot) return;

  // if no prefix return void
  if (msg.content.indexOf(client.config.prefix) !== 0) return;

  // split by any number of spaces with prefix
  const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (client.commands.has(command)) {    
    client.commands.get(command)(client, msg, args);
  }
}
