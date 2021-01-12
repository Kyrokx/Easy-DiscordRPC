const { bgBlue, black, green, bgMagenta } = require("chalk");

module.exports = class Logger {
  static log (content, type = "log") {
    switch (type) {
      case "error": {
        return console.log(`${black.bgRed(type.toUpperCase())} ${content} `);
      }
      case "ready": {
        return console.log(`${black.bgGreen(type.toUpperCase())} ${content}`);
      } 
      default: throw new TypeError(" Erreur avec le loggeur... ");
    }
  }
};