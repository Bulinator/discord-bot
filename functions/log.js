module.exports = (type, msg, title = "Log") => {
  console.log(`[${type}] [${title}] ${msg}`);
};
