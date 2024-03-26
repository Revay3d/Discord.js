// Archivo commands/say.js

module.exports = {
  data: {
    name: "ping",
    description: "El bot dira pong!",
  },
  async execute(message, args) {
    message.channel.send("pong!");
  },
};
