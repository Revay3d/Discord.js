// Archivo commands/say.js

export default {
  data: {
    name: "ping",
    description: "El bot dira pong!",
  },
  async execute(message, args) {
    message.channel.send("pong!");
  },
};
