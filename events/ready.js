module.exports = (client) => {
  //logger.info('Connected');
  //logger.info('Logged in as: ');
  //logger.info(bot.username + ' - (' + bot.id + ')');
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('WIP: my brain.').catch(console.error);
};
