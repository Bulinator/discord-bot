module.exports = (client, reaction, user) => {
  console.log(`${user.tag} reacted to message id ${reaction.message.id} with the reaction ${reaction.emoji.name}`);
}
