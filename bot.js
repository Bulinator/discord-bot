const Discord = require('discord.js');
const auth = require('./auth.json');
const Google = require('./commands/google');
const YouTube = require('./commands/youtube');

// Init discord bot
var bot = new Discord.Client();
// attach config to client to send to module exports
bot.config = require('./config.json');
// add to be aded to a separate class
// bot.log = require('./functions/log.js');
// create collection of commands
bot.commands = new Discord.Collection();
// set command to init
bot.commands.set('ping', require('./commands/ping.js'));
bot.commands.set('speak', require('./commands/speak.js'));
bot.commands.set('serverinfo', require('./commands/serverinfo.js'));
bot.commands.set('react', require('./commands/react.js'));
bot.commands.set('google', require('./commands/google.js'));

// start bot
bot.on('ready', () => require('./events/ready.js')(bot));
// new guild created
bot.on('guildCreate', guild => require('./events/guildCreate.js')(bot, guild));
// new member in the guild
bot.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(bot, member));
// handle message to bot
bot.on('message', msg => require('./events/message.js')(bot, msg, auth));
// handle message reaction
bot.on('messageReactionAdd', (reaction, user) => require('./events/messageReactionAdd.js')(bot, reaction, user));

// auth bot (see discord API)
bot.login(auth.token)
