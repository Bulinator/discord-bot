module.exports = (client, msg, auth) => {
  // if it's bot itself, no response
  if (msg.author.bot) return;

  // if no prefix return void
  if (msg.content.indexOf(client.config.prefix) !== 0) return;

  // split by any number of spaces with prefix
  //const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
  //const command = args.shift().toLowerCase();
  var command = msg.content.split(" ")[0].slice(client.config.prefix.length);

  // Get the params in an array of arguments to be used in the bot
  var params = msg.content.split(" ").slice(1);
  // run the `elevation` function to get the user's permission level
  let perms = client.elevation(msg);
  let cmd;
  // Check if the command exists in Commands
  if (client.commands.has(command)) {
    // Assign the command, if it exists in Commands
    cmd = client.commands.get(command)
  // Check if the command exists in Aliases
  } else if (client.aliases.has(command)) {
    // Assign the command, if it exists in Aliases
    cmd = client.commands.get(client.aliases.get(command));
  }

  if(cmd) {
    // Check user's perm level against the required level in the command
    if (perms < cmd.conf.permLevel) return;
    // Run the `exports.run()` function defined in each command.
    cmd.run(client, msg, params);
  }

}
