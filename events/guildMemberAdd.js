modules.exports = (client, member) => {
  /*
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome on ${member.user.tag}, ${member.id} into ${member.guild.name} (${member.guild.id})`);
  */
  console.log((`Welcome on ${member.user.tag}, ${member.id} into ${member.guild.name} (${member.guild.id})`));
  const welcomeChannel = member.guild.channels.find('name', 'welcome');
  // avoid crash bot
  if (welcomeChannel) {
    welcomeChannel.send(`Welcome on ${member.user.tag} to our wonderful cloud`);
  }
};
