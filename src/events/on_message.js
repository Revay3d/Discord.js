import config from "../config.json" assert { type: "json" };

const { prefix } = config;

export default {
  name: "messageCreate",

  async execute(message, client) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = client.commands.get(args.shift().toLowerCase());

    if (!command) return;
    else {
      try {
        command.execute(message, args);
      } catch (error) {
        console.error(error);
        message.reply("¡Hubo un error al ejecutar este comando!");
      }
    }
  },
};
