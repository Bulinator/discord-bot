const Discord = require('discord.js');
const fs = require('fs');
const auth = require('./auth.json');
//const Google = require('./commands/google');
//const YouTube = require('./commands/youtube');

// Init discord bot
var bot = new Discord.Client();
// attach config to bot to send to module exports
bot.config = require('./config.json');
// add to be aded to a separate class
// bot.log = require('./functions/log.js');
// create collection of commands

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.elevation = function(msg) {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  let mod_role = msg.guild.roles.find("name", "Mods");
  if(mod_role && msg.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = msg.guild.roles.find("name", "Devs");
  if(admin_role && msg.member.roles.has(admin_role.id)) permlvl = 3;
  if(msg.author.id === auth.ownerId) permlvl = 4;
  return permlvl;
};

// set command to init
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(file => {
    // make sure it's a js file
    if (file.split(".").slice(-1)[0] !== "js") return;

    let props = require(`./commands/${file}`);
    console.log(`Loading Command: ${props.help.name}...`);
    bot.commands.set(props.help.name, props);
    // build aliases
    props.conf.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
    //bot.commands.set(file.replace(/\.[^/.]+$/, ""), require(`./commands/${file}`));
  });
});

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
