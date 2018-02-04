const Command = require('./command');

module.exports = class YouTube extends Command {

  static action(message) {
    /*
    const ALPHABET = '23456789abdegjkmnpqrvwxyz-_';
    const ID_LENGTH = 11;
    var q = '';
    for (var i = 0; i < ID_LENGTH; i++) {
      q += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }

    console.log(q);
    */
    message.reply(`https://www.youtube.com/watch?v=Tfr44XSIHxo`);
  }

}
